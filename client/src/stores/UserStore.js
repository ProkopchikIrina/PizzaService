import React from "react";
import {observable, action} from "mobx";

const USERS_URL = 'api/users';

export default class UserStore {
  @observable
  users = [];

  create(userDetails) {
    console.log(userDetails);
    const params = {
      method : 'POST',
      body   : JSON.stringify(userDetails),
      headers: {'Content-Type': 'application/json'}
    };
    fetch(USERS_URL, params)
      .then(response => response.json())
      .then(action(user => this.users.push(user)))
      .catch(e => console.log(e));
  }

  delete(identity) {
    fetch(USERS_URL + "/" + identity, {method: 'DELETE'})
      .then(() => this.deleteHandler(identity))
      .catch(e => console.error(e.message))
  }

  @action
  deleteHandler(identity) {
    const itemIndex = this.users.findIndex(({id}) => id === identity);
    if (itemIndex > -1) {
      this.users.splice(itemIndex, 1);
    }
  }

  loadAll() {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(action(users => this.users = users))
      .catch(error => console.error(error.message))
  }
}