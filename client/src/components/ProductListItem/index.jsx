import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button, Input} from 'reactstrap';
import './style.css';

@inject('orderItemStore')
@observer
export default class ProductsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state             = {
      count  : 1,
      product: this.props.product
    };
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.state.product.title}</td>
        <td>{this.state.product.ingredients}</td>
        <td>{this.state.product.price} б. р.</td>
        <td>{this.state.product.weight} г.</td>
        <td><Input className="countInput" type="number" value={this.state.count} onChange={this.handleCountChange}/></td>
        <td><Button onClick={() => this.addToCart(this.state.product, this.state.count)}>Добавить в корзину</Button></td>
      </tr>
    );
  }

  handleCountChange(event) {
    this.setState({
      count: event.target.value
    })
  }

  addToCart(product, count) {
    let orderItem = {product: product, count: count};
    this.props.orderItemStore.addToShoppingCart(orderItem);
  }
}