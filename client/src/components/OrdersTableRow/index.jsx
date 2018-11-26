import React from "react";
import {Input, Label} from 'reactstrap';
import {inject} from 'mobx-react/index';

@inject('orderStore')
@inject('orderItemStore')
export default class OrdersTableRow extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state              = {
      order: this.props.order
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <tr>
        <td> {this.state.order.date}</td>
        <td> {this.state.order.time}</td>
        <td> {this.state.order.address}</td>
        <td> {this.state.order.phoneNumber}</td>
        <td> {this.loadAllItemsOfOrder(this.state.order.id).map(({title, count}) => (<div>{title} - {count} шт.</div>))}</td>
        <td>
          <Input type="select" name="status" id="status" value={this.state.order.status} onChange={this.handleStatusChange}>
            <option value="Новый">Новый</option>
            <option value="В обработке">В обработке</option>
            <option value="Подтвержден">Подтвержден</option>
          </Input>
        </td>
      </tr>)
  }

  handleStatusChange(event) {
    const newStatus = event.target.value;
    this.setState({
      status: newStatus
    });
    this.updateOrderStatus(newStatus)
  }

  updateOrderStatus(id, status) {
    this.props.orderStore.updateOrderStatus(id, status);
  }


  loadAllItemsOfOrder(orderId) {
    return this.props.orderItemStore.loadAllOfOrder(orderId);
  }
}