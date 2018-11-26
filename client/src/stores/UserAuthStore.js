import {action, observable} from "mobx";

const LOGIN_URL = 'http://localhost:8080/PizzaService/login';

export default class AuthStore {
  @observable
  user = null;

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

  completeRequest(params) {
    fetch(LOGIN_URL, params)
      .then(response => response.json())
      .then(action(user => {
        this.user = user;
        return true;
      }))
      .catch(e => {
        console.log(e);
        return false;
      });
  }

  formRequestBody = (userParams) => {
    let formData = [];
    formData.push(encodeURIComponent("username") + '=' + encodeURIComponent(userParams.username));
    formData.push(encodeURIComponent("password") + '=' + encodeURIComponent(userParams.password));
    return formData.join('&');
  };

  logOut() {
    fetch('hello', {method: 'POST'})
      .then(() => this.user = null)
      .catch(e => console.log(e));
  }
}