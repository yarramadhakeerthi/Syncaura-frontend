const signupForm = document.querySelector('#signup-form');
const signupToast = document.querySelector('.toast');
document.querySelectorAll('.eye').forEach((button) => button.addEventListener('click', () => {
  const input = button.parentElement.querySelector('.password');
  input.type = input.type === 'password' ? 'text' : 'password';
}));
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  signupToast.classList.add('show');
  setTimeout(() => signupToast.classList.remove('show'), 2600);
});
