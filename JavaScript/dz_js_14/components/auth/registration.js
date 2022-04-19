document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.forms.reg;
  const errorMessage = document.querySelector('.error');
  const regMessage = document.querySelector('.reg-message');
  regForm.style.display = 'form';

  regForm.addEventListener('submit', (event) =>
    handlerRegUser(event, errorMessage, regMessage)
  );
});

function handlerRegUser(event, errorMessage, regMessage) {
  event.preventDefault();

  const { email, login, phone, password, rePassword } = document.forms.reg;

  if (!Validation.isEmail(email.value)) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = '*wrong email adress';
    return;
  } else if (!Validation.isLogin(login.value)) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = '*invalid login';
    return;
  } else if (!Validation.isPhone(phone.value)) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = '*invalid phone number';
    return;
  } else if (!Validation.isPassword(password.value)) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = '*password is weak';
    return;
  } else if (password.value !== rePassword.value) {
    errorMessage.classList.remove('hide');
    errorMessage.innerText = '*different passwords';
    return;
  } else {
    errorMessage.classList.add('hide');
    const user = {
      email: email.value.trim(),
      login: login.value.trim(),
      phone: phone.value.trim(),
      password: password.value.trim(),
    };

    if (User.findUser(user)) {
      errorMessage.classList.remove('hide');
      errorMessage.innerText = '*this user has registered already';
    } else {
      User.saveUser(user);
      this.document.forms.reg.style.display = 'none';
      regMessage.style.display = 'block';

      setTimeout(() => (location.href = '../../index.html'), 1000);
    }
  }
}
