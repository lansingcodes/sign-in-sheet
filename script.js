(function () {
  // Keep event form and print in sync
  const eventInput = document.getElementById('eventInput')
  const eventPrint = document.getElementById('eventPrint')
  eventInput.addEventListener('input', function () {
    eventPrint.innerHTML = eventInput.value
  })

  // Repeat elements as indicated
  const elementsToRepeat = document.querySelectorAll('[data-repeat]')
  elementsToRepeat.forEach(function (element) {
    const repeatCount = parseInt(element.getAttribute('data-repeat')) || 0
    for (let i = 0; i < repeatCount; i++) {
      const clone = element.cloneNode(true)
      element.insertAdjacentElement('afterend', clone)
    }
  })
})()
