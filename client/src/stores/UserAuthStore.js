import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

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
    fetch('http://localhost:8080/PizzaService/login', params)
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

  formRequestBody(userParams) {
    let formData = [];
    for (let parameter in userParams) {
      formData.push(encodeURIComponent(parameter) + '=' + encodeURIComponent(userParams[parameter]));
    }
    return formData.join('&');
  }

  logOut() {
    fetch(CONTEXT_URL + 'hello', {method: 'POST'})
      .then(() => this.user = null)
      .catch(e => console.log(e));
  }
}