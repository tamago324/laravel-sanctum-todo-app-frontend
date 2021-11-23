class User {
  constructor() {
    this.init();
  }

  init() {
    // localStateから取得する
    this.name = localStorage.getItem('userName');
    this.email = localStorage.getItem('userEmail');
    this.loggedIn = localStorage.getItem('userLoggedIn');
  }

  authenticated(data, callback) {
    // localStorage にセットする
    localStorage.setItem('userName', data.name);
    localStorage.setItem('userEmail', data.email);
    localStorage.setItem('userLoggedIn', true);

    this.init();
    callback();
  }

  isLoggedIn() {
    return Boolean(this.loggedIn) === true;
  }
}

export default new User();
