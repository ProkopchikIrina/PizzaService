import React from "react";
import {inject, observer} from 'mobx-react/index';

import OrderItem from '../OrderItem'

@inject('orderItemStore', 'orderStore')
@observer
export default class OrdersTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state              = {
      order     : this.props.order,
      orderItems: [],
    };
    this.props.orderItemStore.loadAllOfOrder(this.state.order.id).then(orderItems => this.setState({
      orderItems: Array.from(orderItems)
    }));
  }

  render() {
    return (
      <tr>
        <td> {this.state.order.date}</td>
        <td> {this.state.order.time}</td>
        <td> {this.state.order.address}</td>
        <td> {this.state.order.phoneNumber}</td>
        <td> {this.state.orderItems.map((item) => <OrderItem orderItem={item}/>)}</td>
        <td> {this.state.order.comment}</td>
      </tr>)
  }
}