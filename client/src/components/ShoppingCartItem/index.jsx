import React from "react";
import {inject, observer} from "mobx-react/index";
import {Input, Button} from 'reactstrap';
import './style.css';

@inject('orderItemStore')
@observer
export default class ShoppingCartItem extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state             = {
      count  : this.props.count,
      product: this.props.product
    };
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <tr>
        <td>{this.state.product.title}</td>
        <td>{this.state.product.ingredients}</td>
        <td>{this.state.product.price} б. р.</td>
        <td>{this.state.product.weight} г.</td>
        <td><Input className="countInput" type="number" value={this.state.count} onChange={this.handleCountChange}/></td>
        <td><Button onClick={() => this.deleteFromShoppingCart()}>Удалить из корзины</Button></td>
      </tr>
    );
  }

  handleCountChange(event) {
    this.setState({
      count: event.target.value
    })
  }

  getInitialState() {
    this.setState({
      count  : this.props.count,
      product: this.props.product
    });
  }

  deleteFromShoppingCart() {
    console.log(this.state.product);
    this.props.orderItemStore.deleteFromShoppingCart({product: this.state.product, count: this.props.count});
  }
}