import {action, observable} from "mobx";

const ORDERS_URL = 'api/orders';

/**
 * Store for working with orders
 */
export default class OrderStore {
  /**
   * Contains stored orders
   * @type {Array}
   */
  @observable
  orders = [];

  /**
   * Saves new order
   * @param orderDetails
   */
  create(orderDetails) {
    const params = {
      method : 'POST',
      body   : JSON.stringify(orderDetails),
      headers: {'Content-Type': 'application/json'}
    };
    fetch(ORDERS_URL, params)
      .then(response => response.json())
      .then(action(order => this.orders.push(order)))
      .catch(e => console.log(e));
  }

  /**
   * Load all orders
   */
  loadAll() {
    fetch(ORDERS_URL)
      .then(response => response.json())
      .then(action(orders => this.orders = orders))
      .catch(error => console.error(error.message))
  }

  /**
   * Update order status
   * @param id
   * @param status
   */
  updateOrderStatus(id, status) {
    const params = {
      method : 'PUT',
      body   : JSON.stringify({id: id, status: status}),
      headers: {'Content-Type': 'application/json'}
    };
    fetch(ORDERS_URL, params)
      .catch(e => console.error(e.message))
  }
}