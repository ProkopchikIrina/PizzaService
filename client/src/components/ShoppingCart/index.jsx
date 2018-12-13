import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button, Table} from 'reactstrap';

import ShoppingCartItem from '../ShoppingCartItem'
import './style.css';

@inject('orderItemStore', 'orderStore')
@observer
export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearShoppingCart = this.handleClearShoppingCart.bind(this);
  }

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
        <h5>Общая сумма: {this.getTotalSum(shoppingCartItems)} б. р.</h5>
        <Button href="#/orderDetails" className="button">Оформить заказ</Button>
        <Button onClick={this.handleClearShoppingCart} className="button">Очистить корзину</Button>
      </div>
    );
  }

  getTotalSum(items) {
    let total = 0;
    items.map(({product: {price}, count}) => total += price * count);
    return total;
  }

  handleClearShoppingCart() {
    this.props.orderItemStore.shoppingCartItems = [];
  }
}
