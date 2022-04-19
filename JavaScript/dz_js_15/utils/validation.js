class Validation {
  static isEmail(email) {
    return validator.isEmail(email);
  }

  static isPassword(pass) {
    return validator.isStrongPassword(pass);
  }

  static isLogin(login) {
    return validator.isAlpha(login);
  }

  static isName(name) {
    return /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/.test(name);
  }

  static isDate(date) {
    return validator.isDate(date, 'YYYY-MM-DD') && validator.isBefore(date);
  }

  static isPhone(phone) {
    return validator.isMobilePhone(phone, 'uk-UA');
  }

  static isSkype(skype) {
    return /^live:[a-zA-Z]{5,}$/.test(skype);
  }
}
