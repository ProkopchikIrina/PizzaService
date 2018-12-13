import {action, observable} from "mobx";

const PRODUCTS_URL = 'api/products';

/**
 * Store for working with products
 */
export default class ProductStore {
  /**
   * Contains stored products
   * @type {Array}
   */
  @observable
  products = [];

  /**
   * Saves new product
   * @param productDetails
   */
  create(productDetails) {
    console.log(productDetails);
    const params = {
      method : 'POST',
      body   : JSON.stringify(productDetails),
      headers: {'Content-Type': 'application/json'}
    };
    fetch(PRODUCTS_URL, params)
      .then(response => response.json())
      .then(action(product => this.products.push(product)))
      .catch(error => console.log(error));
  }

  /**
   * Load all products
   */
  loadAll() {
    fetch(PRODUCTS_URL)
      .then(response => response.json())
      .then(action(products => this.products = products))
      .catch(error => console.error(error.message))
  }

  /**
   * Deletes product by id
   * @param id
   */
  delete(id) {
    fetch(PRODUCTS_URL + "/" + id, {method: 'DELETE'})
      .then(() => this.deleteHandler(id))
      .catch(error => console.error(error.message))
  }

  /**
   * Deletes product from products array by id
   * @param id
   */
  @action
  deleteHandler(id) {
    const itemIndex = this.products.findIndex(({id}) => id === id);
    if (itemIndex > -1) {
      this.products.splice(itemIndex, 1);
    }
  }
}