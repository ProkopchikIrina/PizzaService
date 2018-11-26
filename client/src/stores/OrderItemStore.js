import {observable} from "mobx";

const ORDER_ITEMS_URL = 'api/orderItems';
export default class OrderItemStore {
  @observable
  orderItems = [];

  addToShoppingCart(orderItemDetails) {
    this.orderItems.push(orderItemDetails);
  }

  loadAllOfOrder(orderId) {
    fetch(ORDER_ITEMS_URL + "/" + orderId)
      .then(response => response.json())
      .then(orderItems => {return orderItems})
      .catch(error => console.error(error.message));
  }
}