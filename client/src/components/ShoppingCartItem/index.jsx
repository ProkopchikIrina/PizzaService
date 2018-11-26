import React from "react";
import {inject, observer} from "mobx-react/index";
import {Input} from 'reactstrap';

@inject('orderItemStore')
@observer
export default class ShoppingCartItem extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    // this.getInitialState();
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
        <td>{this.state.product.price}</td>
        <td>{this.state.product.weight}</td>
        <td><Input type="number" value={this.state.count} onChange={this.handleCountChange}/></td>
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
}