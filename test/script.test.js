const test = require('node:test')
const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { runInNewContext } = require('node:vm')

test('organizer title is rendered as text', () => {
  const listeners = {}
  const input = { value: '' , addEventListener: (_name, handler) => { listeners.title = handler } }
  const print = {
    textContent: '',
    set innerHTML(_value) { throw new Error('HTML insertion is unsafe') },
  }
  const control = { addEventListener() {} }
  const document = {
    getElementById: (id) => id === 'eventInput' ? input : control,
    getElementsByClassName: () => [print],
    querySelectorAll: () => [],
  }
  runInNewContext(readFileSync('script.js', 'utf8'), { document })
  input.value = '<img src=x onerror=alert(1)>'
  listeners.title()
  assert.equal(print.textContent, input.value)
})

test('page count cannot remove the only sign-in page', () => {
  let updatePages
  const controls = {
    eventInput: { addEventListener() {} },
    pageCount: { value: '0', addEventListener: (name, handler) => { if (name === 'input') updatePages = handler } },
    showLineNumbers: { addEventListener() {} },
  }
  const document = {
    getElementById: (id) => controls[id],
    getElementsByClassName: () => [],
    getElementsByTagName: () => [{}],
    querySelectorAll: () => [],
  }
  runInNewContext(readFileSync('script.js', 'utf8'), { document })
  updatePages()
  assert.equal(controls.pageCount.value, '1')
})

test('clearing page count while editing does not insert an unwanted leading one', () => {
  const listeners = {}
  const controls = {
    eventInput: { addEventListener() {} },
    pageCount: { value: '1', addEventListener: (name, handler) => { listeners[name] = handler } },
    showLineNumbers: { addEventListener() {} },
  }
  const document = {
    getElementById: (id) => controls[id],
    getElementsByClassName: () => [],
    getElementsByTagName: () => [{}],
    querySelectorAll: () => [],
  }
  runInNewContext(readFileSync('script.js', 'utf8'), { document })
  controls.pageCount.value = ''
  listeners.input()
  assert.equal(controls.pageCount.value, '')
  listeners.blur()
  assert.equal(controls.pageCount.value, '1')
})
