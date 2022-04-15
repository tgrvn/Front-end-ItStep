class User {
  static #KEY_DATA = 'user';
  static #KEY_DATA_LOGIN = 'logged user';

  static saveRegUser(user) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA)) || [];
    users.push(user);
    localStorage.setItem(User.#KEY_DATA, JSON.stringify(users));
  }

  static findUser(user) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));

    if (!users) {
      return false;
    }

    return users?.find((_user) => {
      return _user.email === user.email || _user.login === user.login;
    });
  }

  static loginUser(login, password) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));

    if (!users) {
      return false;
    } else {
      const currentUser = users?.find((_user) => {
        return (
          (_user.email === login || _user.login === login) &&
          _user.password === password
        );
      });

      if (currentUser) {
        localStorage.setItem(User.#KEY_DATA_LOGIN, JSON.stringify(currentUser));
        return currentUser;
      } else {
        return false;
      }
    }
  }

  static userLogOut() {
    localStorage.removeItem(User.#KEY_DATA_LOGIN);
  }

  static getLoggedUser() {
    return JSON.parse(localStorage.getItem(User.#KEY_DATA_LOGIN));
  }

  static findUserInfo() {
    const user = User.getLoggedUser();
    return 'userInfo' in user;
  }

  static addUserInfo(userInfo) {
    const users = JSON.parse(localStorage.getItem(User.#KEY_DATA));
    const currentUser = User.getLoggedUser();

    users.forEach((element, i) => {
      if (element.email === currentUser.email) {
        users.splice(i, 1);
      }
    });

    currentUser.userInfo = userInfo;
    users.push(currentUser);
    localStorage.setItem(User.#KEY_DATA, JSON.stringify(users));
  }
}
