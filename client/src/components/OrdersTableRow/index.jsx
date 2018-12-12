import React from "react";
import {Input} from 'reactstrap';
import {inject, observer} from 'mobx-react/index';

import OrderItem from '../OrderItem'

@inject('orderItemStore', 'orderStore')
@observer
export default class OrdersTableRow extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state              = {
      order     : this.props.order,
      orderItems: []
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.props.orderItemStore.loadAllOfOrder(this.state.order.id).then(orderItems => this.setState({
      orderItems: Array.from(orderItems)
    }));
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    const {props: {orderItemStore: {orderItems}}} = this;
    return (
      <tr>
        <td> {this.state.order.date}</td>
        <td> {this.state.order.time}</td>
        <td> {this.state.order.address}</td>
        <td> {this.state.order.phoneNumber}</td>
        <td> {this.state.orderItems.map((item) => <OrderItem orderItem={item}/>)}</td>
        <td>
          <Input type="select" name="status" id="status" value={this.state.order.status} onChange={this.handleStatusChange}>
            <option value="Новый">Новый</option>
            <option value="В обработке">В обработке</option>
            <option value="Подтвержден">Подтвержден</option>
            <option value="Доставляется">Доставляется</option>
            <option value="Доставлен">Доставлен</option>
          </Input>
        </td>
      </tr>)
  }

  handleStatusChange(event) {
    const newStatus = event.target.value;
    this.setState({
      status: newStatus
    });
    this.updateOrderStatus()
  }

  updateOrderStatus() {
    this.props.orderStore.updateOrderStatus(this.state.order.id, this.state.order.status);
  }

  loadAllItemsOfOrder(orderId) {
    this.setState({orderItems: this.props.orderItemStore.loadAllOfOrder(orderId)});
  }
}