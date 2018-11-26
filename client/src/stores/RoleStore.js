import {observable, action} from "mobx";

const ROLES_URL = 'api/roles';

export default class RoleStore {
  @observable
  roles = [];

  loadAll() {
    fetch(ROLES_URL)
      .then(response => response.json())
      .then(action(roles => this.roles = roles))
      .catch(error => console.error(error.message))
  }
}