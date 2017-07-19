export class AuthService {
  loggedIn: boolean = false;

  constructor() { }

  // this method simulates a network task such as authenticating a user from
  // another server...it takes some time for the response therefore a promise
  // is returned to the calling method which in this example can be found
  // in the AuthGuardService method canActivate().
  isAuthenticated(): Promise<boolean> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => { resolve(this.loggedIn); }, 500);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
