import {observable, action} from "mobx";

const ROLES_URL = 'api/roles';

/**
 * Store for working with roles
 */
export default class RoleStore {
  /**
   * Contains stored roles
   * @type {Array}
   */
  @observable
  roles = [];

  /**
   * Load all roles
   */
  loadAll() {
    fetch(ROLES_URL)
      .then(response => response.json())
      .then(action(roles => this.roles = roles))
      .catch(error => console.error(error.message))
  }
}