const eventName = new URLSearchParams(window.location.search).get('event');
if (eventName && eventName.trim().length <= 100) {
  document.querySelector('#event').value = eventName.trim();
}

document.querySelector('#newsletter').addEventListener('change', (event) => {
  const email = document.querySelector('#email');
  email.required = event.target.checked;
});
