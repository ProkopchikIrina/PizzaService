import {action, observable} from "mobx";

const LOGIN_URL  = 'loginHandler';
const LOGOUT_URL = 'logout';
/**
 * Store for working with user's authentication
 */
export default class UserAuthStore {
  /**
   * Contains authenticated user
   */
  @observable
  user = null;

  /**
   * Sing-in method
   * @param username
   * @param password
   */
  signIn(username, password) {
    const userParams = {
      username: username,
      password: password,
    };
    const params     = {
      method : 'POST',
      body   : this.formRequestBody(userParams),
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    };
    this.completeRequest(params);
  }

  /**
   * Method for performing login request
   * @param params
   */
  completeRequest(params) {
    fetch(LOGIN_URL, params)
      .then(response => response.json())
      .then(action(user => {
        this.user = user;
        console.log(user.username);
      }))
      .catch(console.log);
  }

  /**
   * Method for forming request body
   * @param userParams
   * @returns {string}
   */
  formRequestBody = (userParams) => {
    let credentials = [];
    credentials.push(encodeURIComponent("username") + '=' + encodeURIComponent(userParams.username));
    credentials.push(encodeURIComponent("password") + '=' + encodeURIComponent(userParams.password));
    return credentials.join('&');
  };

  /**
   * Method for user logout
   */
  logOut() {
    fetch(LOGOUT_URL, {method: 'GET'})
      .then(() => this.user = null)
      .catch(e => console.log(e));
  }
}