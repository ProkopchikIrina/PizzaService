import {action, observable} from "mobx";

const ORDER_ITEMS_URL = 'api/orderItems';

/**
 * Store for working with order items
 */
export default class OrderItemStore {
  /**
   * Contains stored shopping cart items
   * @type {Array}
   */
  @observable
  shoppingCartItems = [];

  /**
   * Contains stored constructor items
   * @type {Array}
   */
  @observable
  constructorItems = [];

  /**
   * Add order item to shopping cart
   * @param item
   */
  @action
  addToShoppingCart(item) {
    this.shoppingCartItems.push(item);
  }

  /**
   * Add order item to shopping cart
   * @param item
   */
  @action
  addToConstructorStoredItems(item) {
    this.constructorItems.push(item);
  }

  /**
   * Delete order item from shopping cart
   * @param item
   */
  @action
  deleteFromShoppingCart(item) {
    this.shoppingCartItems.splice(this.shoppingCartItems.indexOf(item), 1);
  }

  /**
   * Load all orderItems of order
   * @param orderId
   */
  loadAllOfOrder(orderId) {
    return fetch(ORDER_ITEMS_URL + "/" + orderId)
      .then(response => {
        return response.json();
      })
      .then(orderItems => {
        return orderItems;
      })
      .catch(error => console.error(error.message));
  }
}