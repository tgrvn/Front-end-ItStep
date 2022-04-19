class Validation {
  static isEmail(email) {
    return validator.isEmail(email);
  }

  static isLogin(login) {
    return validator.isAlpha(login);
  }

  static isPhone(phone) {
    return validator.isMobilePhone(phone, 'uk-UA');
  }

  static isPassword(password) {
    return validator.isStrongPassword(password);
  }
}
