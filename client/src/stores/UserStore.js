import {action, observable} from "mobx";

const USERS_URL = 'api/users';

/**
 * Store for working with users
 */
export default class UserStore {
  /**
   * Contains stored users
   * @type {Array}
   */
  @observable
  users = [];

  /**
   * Saves new user
   * @param userDetails
   */
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

  /**
   * Deletes user by id
   * @param id
   */
  delete(id) {
    fetch(USERS_URL + "/" + id, {method: 'DELETE'})
      .then(() => this.deleteHandler(id))
      .catch(e => console.error(e.message))
  }

  /**
   * Deletes user from users array by id
   * @param id
   */
  @action
  deleteHandler(id) {
    const itemIndex = this.users.findIndex(({id}) => id === id);
    if (itemIndex > -1) {
      this.users.splice(itemIndex, 1);
    }
  }

  /**
   * Load all users
   */
  loadAll() {
    fetch(USERS_URL)
      .then(response => response.json())
      .then(action(users => this.users = users))
      .catch(error => console.error(error.message))
  }
}