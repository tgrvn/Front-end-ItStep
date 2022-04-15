document.addEventListener('DOMContentLoaded', function () {
  const logForm = document.forms.log;
  const errorMsg = document.querySelector('.error');
  const main = document.querySelectorAll('.main')[0];
  errorMsg.classList.add('hide');
  logForm.addEventListener('submit', (event) =>
    handlerLogIn(event, errorMsg, main)
  );
});

function handlerLogIn(event, errorMsg, main) {
  event.preventDefault();

  const { login, password } = document.forms.log;
  const user = {
    login: login.value.trim(),
    password: password.value.trim(),
  };

  // console.log();

  if (User.userLogin(user)) {
    main.classList.add('hide');
    const cab = new Cabinet(document.forms.log, User.userInfo(user));
  } else {
    errorMsg.classList.remove('hide');
    errorMsg.innerText = '*invalid login or password';
  }
}

class Cabinet {
  constructor(form, info) {
    const cabinet = document.querySelectorAll('.main')[1];
    cabinet.classList.remove('hide');

    const col = document.querySelectorAll('.col')[1];

    const header = document.querySelectorAll('h2')[1];
    header.innerText = `Welcome, ${info.login}`;

    const userEmail = document.createElement('p');
    userEmail.classList.add('user-email');
    userEmail.innerText = `Email: ${info.email}`;

    const userPhone = document.createElement('p');
    userEmail.classList.add('user-phone');
    userPhone.innerText = `Phone: ${info.phone}`;

    col.append(userEmail, userPhone);

    form.style.display = 'none';
  }
}
