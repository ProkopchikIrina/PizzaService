import React from "react";
import {inject, observer} from "mobx-react/index";
import './style.css';

@inject('orderItemStore')
@observer
export default class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count  : this.props.count,
      product: this.props.product
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.product.title}</td>
        <td>{this.state.product.ingredients}</td>
        <td>{this.state.product.price} б. р.</td>
        <td>{this.state.product.weight} г.</td>
        <td>{this.state.count} шт.</td>
      </tr>
    );
  }
}