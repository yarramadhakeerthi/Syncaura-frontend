const eye = document.querySelector('.eye-button');
const password = document.querySelector('#password');
const form = document.querySelector('#login-form');
const toast = document.querySelector('.toast');
eye.addEventListener('click', () => {
  const visible = password.type === 'text';
  password.type = visible ? 'password' : 'text';
  eye.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});

document.querySelectorAll('.social').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
