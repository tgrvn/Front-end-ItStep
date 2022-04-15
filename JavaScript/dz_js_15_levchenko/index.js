document.addEventListener('DOMContentLoaded', function () {
  const logForm = document.forms.login;
  const error = document.querySelector('.error');

  logForm.addEventListener('submit', (event) => handlerLoginUser(event, error));
});

function handlerLoginUser(event, error) {
  event.preventDefault();

  const { login, password } = document.forms.login;

  if (!!User.loginUser(login.value.trim(), password.value.trim())) {
    error.classList.add('hide');
    User.loginUser(login, password);
    location.href = './cabinet/cabinet.html';
  } else {
    error.classList.remove('hide');
    error.innerText = '*user not registered';
  }
}
