import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

test('newsletter email follows restored checkbox state on load and pageshow', () => {
  const handlers = {};
  const newsletter = { checked: true, addEventListener: (name, handler) => { handlers[name] = handler; } };
  const email = { required: false };
  const document = { querySelector: (selector) => ({ '#newsletter': newsletter, '#email': email })[selector] };
  const window = {
    location: { search: '' },
    addEventListener: (name, handler) => { handlers[name] = handler; }
  };
  runInNewContext(readFileSync(new URL('../digital/script.js', import.meta.url), 'utf8'), {
    document, window, URLSearchParams
  });
  assert.equal(email.required, true);

  newsletter.checked = false;
  handlers.pageshow();
  assert.equal(email.required, false);

  newsletter.checked = true;
  handlers.change();
  assert.equal(email.required, true);
});
