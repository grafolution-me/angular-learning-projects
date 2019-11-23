export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 600);
      }
    );
    return promise;
  }
  login() {
    this.loggedIn = true;
  }
  loggout() {
    this.loggedIn = false;
  }
}
