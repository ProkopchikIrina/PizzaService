import React from "react";
import {observable, action} from "mobx";

const ORDER_ITEMS_URL = 'api/orderItems';

export default class OrderItemStore {
  @observable
  orders = [];

  create(orderItemDetails) {
    const params = {
      method : 'POST',
      body   : JSON.stringify(orderItemDetails),
      headers: {'Content-Type': 'application/json'}
    };
    fetch(ORDER_ITEMS_URL, params)
      .then(response => response.json())
      .then(action(product => this.orders.push(product)))
      .catch(e => console.log(e));
  }
  loadAll() {
    fetch(ORDER_ITEMS_URL)
      .then(response => response.json())
      .then(action(products => this.orders = products))
      .catch(error => console.error(error.message))
  }
}