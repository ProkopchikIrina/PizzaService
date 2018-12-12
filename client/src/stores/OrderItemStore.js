import {observable, action} from "mobx";

const ORDER_ITEMS_URL = 'api/orderItems';

/**
 * Store for working with order items
 */
export default class OrderItemStore {
  /**
   * Contains stored shoppingCartItems
   * @type {Array}
   */
  @observable
  shoppingCartItems = [];

  /**
   * Contains all orders items
   * @type {Array}
   */
  @observable
  orderItems = [];

  /**
   * Add order item to shopping cart
   * @param item
   */
  @action
  addToShoppingCart(item) {
    this.shoppingCartItems.push(item);
  }

  @action
  deleteFromShoppingCart(item) {
    this.shoppingCartItems.splice(this.shoppingCartItems.indexOf(item), 1);
  }

  loadAllOfOrder(orderId) {
    return fetch(ORDER_ITEMS_URL + "/" + orderId)
      .then(response => {
        return response.json();
      })
      .then(orderItems => {
        console.log(orderItems);
        return orderItems;
      });
  }

  /**
   * Find all items by order id
   * @param orderId
   */
  findAllItemsByOrderId(orderId) {
    console.log(this.orderItems);
    return this.orderItems.filter(({order:{id}}) => id === orderId);
  }

  /**
   * Load all orderItems
   */
  loadAll() {
    fetch(ORDER_ITEMS_URL)
      .then(response => response.json())
      .then(action(orderItems => this.orderItems = orderItems))
      .catch(error => console.error(error.message))
  }
}