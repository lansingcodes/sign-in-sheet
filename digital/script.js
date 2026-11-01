const eventName = new URLSearchParams(window.location.search).get('event');
if (eventName && eventName.trim().length <= 100) {
  document.querySelector('#event').value = eventName.trim();
}

const newsletter = document.querySelector('#newsletter');
const email = document.querySelector('#email');
const syncEmailRequired = () => { email.required = newsletter.checked; };
newsletter.addEventListener('change', syncEmailRequired);
window.addEventListener('pageshow', syncEmailRequired);
syncEmailRequired();
