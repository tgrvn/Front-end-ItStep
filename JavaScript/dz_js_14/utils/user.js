class User {
  static #KEY_DATA = 'user';
  static #KEY_DATA_LOGFED = 'loggedUser';

  static saveUser(user) {
    if (user.email && user.login && user.phone && user.password) {
      const users = JSON.parse(localStorage.getItem(User.#KEY_DATA)) || [];
      users.push(user);
      localStorage.setItem(User.#KEY_DATA, JSON.stringify(users));
    }
  }

  static findUser(user) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));
    if (!users) {
      return false;
    }

    return !!users?.find((_user) => {
      return (
        _user.email === user.email ||
        _user.login === user.login ||
        _user.phone === user.phone
      );
    });
  }

  static userLogin(user) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));

    if (!user) {
      return false;
    }

    return !!users?.find((_user) => {
      return (
        (_user.login === user.login || _user.email === user.login) &&
        _user.password === user.password
      );
    });
  }

  static userInfo(user) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));

    return users?.find((_user) => {
      return (
        (_user.login === user.login || _user.email === user.login) &&
        _user.password === user.password
      );
    });
  }
}
