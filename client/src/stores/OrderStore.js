import {observable, action} from "mobx";

const ORDERS_URL = 'api/orders';

export default class OrderStore {
  @observable
  orders = [];

  create(orderDetails) {
    console.log(orderDetails);
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

  loadAll() {
    fetch(ORDERS_URL)
      .then(response => response.json())
      .then(action(orders => this.orders = orders))
      .catch(error => console.error(error.message))
  }


  updateOrderStatus(id, status) {
    fetch(ORDERS_URL, {method: 'PUT', body: {id: id, status: status}})
      .catch(e => console.error(e.message))
  }
}