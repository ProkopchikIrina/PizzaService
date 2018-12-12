import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button, Table} from 'reactstrap';

import ShoppingCartItem from '../ShoppingCartItem'

@inject('orderItemStore', 'orderStore')
@observer
export default class ShoppingCart extends React.Component {
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    const {props: {orderItemStore: {shoppingCartItems}}} = this;
    if (shoppingCartItems.length === 0) {
      return (<h5>Ваша корзина пуста</h5>);
    }
    return (
      <div>
        <Table>
          {shoppingCartItems.map(({count, product}) => (<ShoppingCartItem count={count} product={product}/>))}
        </Table>
        <h5>Общая сумма: </h5> {this.getTotalSum()}
        <Button href="#/orderDetails">Оформить заказ</Button>
      </div>
    );
  }

  getTotalSum() {
    let total = 0;
    return this.shoppingCartItems.map(({product: {price}, count}) => total += price * count);
  }
}
