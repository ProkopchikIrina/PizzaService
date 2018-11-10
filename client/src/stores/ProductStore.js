import React from "react";
import {observable, action} from "mobx";

const PRODUCTS_URL = 'api/products';

export default class ProductStore {
  @observable
  products = [];

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
      .catch(e => console.log(e));
  }
  loadAll() {
    fetch(PRODUCTS_URL)
      .then(response => response.json())
      .then(action(products => this.products = products))
      .catch(error => console.error(error.message))
  }

  delete(identity) {
    fetch(PRODUCTS_URL + "/" + identity, {method: 'DELETE'})
      .then(() => this.deleteHandler(identity))
      .catch(e => console.error(e.message))
  }
  @action
  deleteHandler(identity) {
    const itemIndex = this.products.findIndex(({id}) => id === identity);
    if (itemIndex > -1) {
      this.products.splice(itemIndex, 1);
    }
  }

}