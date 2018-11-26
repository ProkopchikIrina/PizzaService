import React from "react";
import {inject, observer} from "mobx-react/index";
import {Table, Button} from 'reactstrap';

import ShoppingCartItem from '../ShoppingCartItem'

@inject('orderItemStore')
@inject('orderStore')
@observer
export default class ShoppingCart extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    const {props: {orderItemStore: {orderItems}}} = this;
    return (
      <div>
        <Table>
          {orderItems.map(({count, product}) => (<ShoppingCartItem count={count} product={product}/>))}
        </Table>
        <Button href="#/orderDetails">Оформить заказ</Button>
      </div>
    );
  }

}
