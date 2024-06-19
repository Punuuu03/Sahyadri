function validateEmail(email) {
  return /^[a-zA-Z0-9._-]+@gmail\.com$/.test(email);
}
function validatePassword(password) {
  return password.length >= 6;
}
function handleSignup(event) {
  event.preventDefault();
  const { username, email, password } = event.target.elements;

  if (!validateEmail(email.value)) {
      alert('Please enter a valid Gmail address.');
      return;
  }
  if (!validatePassword(password.value)) {
      alert('Password must be at least 6 characters long.');
      return;
  }
  const user = { username: username.value, email: email.value, password: password.value };
  localStorage.setItem('user', JSON.stringify(user));

  alert('Signup successful! You can now login.');
  window.location.href = 'login.html';
}
function handleLogin(event) {
  event.preventDefault();
  const { username, password } = event.target.elements;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!storedUser || storedUser.email !== username.value || storedUser.password !== password.value) {
      alert('Incorrect email or password.');
      return;
  }

  alert('Login successful!');
  window.location.href = 'index.html';
}
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
      signupForm.addEventListener('submit', handleSignup);
  }

  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
  }
});
