document.addEventListener('DOMContentLoaded', function () {
  const exit = document.querySelector('.exit');
  exit.addEventListener('click', (event) => handlerExit(event));

  const welcome = document.querySelector('.main > h2');
  const login = document.querySelector('.login');
  const email = document.querySelector('.email');
  const user = User.getLoggedUser();

  welcome.innerText = `Welcome, ${user.login}`;
  login.innerText = `login: ${user.login}`;
  email.innerText = `email: ${user.email}`;

  const infoForm = document.forms.info;
  const error = document.querySelector('.error');
  const cabInfo = document.querySelector('.cabinet');
  const fields = document.querySelectorAll('.cabinet > p');
  infoForm.addEventListener('submit', (event) =>
    handlerSaveInfo(event, error, cabInfo, fields)
  );

  if (User.findUserInfo()) {
    const user = User.getLoggedUser();
    const { userInfo } = user;
    cabInfo.classList.remove('hide');
    document.forms.info.style.display = 'none';
    fields[0].innerText = `${userInfo.fName} ${userInfo.lName}`;
    fields[1].innerText = `${userInfo.birth}`;
    fields[2].innerText = `${userInfo.gender}`;
    fields[3].innerText = `${userInfo.phone}`;
    fields[4].innerText = `${userInfo.skype}`;
  }
});

function handlerExit(event) {
  User.userLogOut();
  location.href = '../index.html';
}

function handlerSaveInfo(event, error, cabInfo, fields) {
  event.preventDefault();
  const { fName, lName, birth, gender, phone, skype } = document.forms.info;

  if (!Validation.isName(fName.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid firsth name';
  } else if (!Validation.isName(lName.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid last name';
  } else if (!Validation.isDate(birth.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid birth date';
  } else if (!Validation.isPhone(phone.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid phone';
  } else if (!Validation.isSkype(skype.value.trim())) {
    error.classList.remove('hide');
    error.innerText = '*invalid skype';
  } else {
    error.classList.add('hide');
    const userInfo = {
      fName: fName.value.trim(),
      lName: lName.value.trim(),
      birth: birth.value.trim(),
      gender: gender.value.trim(),
      phone: phone.value.trim(),
      skype: skype.value.trim(),
    };

    cabInfo.classList.remove('hide');
    document.forms.info.style.display = 'none';
    fields[0].innerText = `${userInfo.fName} ${userInfo.lName}`;
    fields[1].innerText = `${userInfo.birth}`;
    fields[2].innerText = `${userInfo.gender}`;
    fields[3].innerText = `${userInfo.phone}`;
    fields[4].innerText = `${userInfo.skype}`;

    cabInfo.classList.remove('hide');
    User.addUserInfo(userInfo);
    document.forms.info.style.display = 'none';
    cabInfo.classList.remove('hide');
  }
}
