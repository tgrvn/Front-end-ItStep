document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.forms.reg;
  const error = document.querySelector('.error');
  const load = document.querySelector('.load-screen');

  regForm.addEventListener('submit', (event) =>
    handlerRegUser(event, error, regForm, load)
  );
});

function handlerRegUser(event, error, regForm, load) {
  event.preventDefault();

  const { login, password, rePassword, email } = regForm;

  if (!Validation.isLogin(login.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*login must be letters only';
  } else if (!Validation.isPassword(password.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*password is weak';
  } else if (password.value.trim() !== rePassword.value.trim()) {
    error.classList.remove('hide');
    error.innerText = '*passwords do not match';
  } else if (!Validation.isEmail(email.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid email';
  } else {
    error.classList.add('hide');
    const user = {
      login: login.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    if (!!User.findUser(user)) {
      error.classList.remove('hide');
      error.innerText = '*user registered already';
    } else {
      User.saveRegUser(user);
      document.querySelector('.main').classList.add('hide');
      load.classList.remove('hide');
      setTimeout(() => (location.href = '../../index.html'), 1000);
    }
  }
}
