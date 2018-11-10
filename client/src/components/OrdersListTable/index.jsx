import React from "react";
import {inject, observer} from "mobx-react/index";

@inject('orderStore')
@observer
export default class OrdersListTable extends React.Component {
  constructor(props) {
    super(props);
    this.loadAll();
  }

  render() {
    const {props: {orderStore: {orders}}} = this;
    return (
      <div>
        <table>
          {orders.map(({address, time, date, phoneNumber, status}) => (<tr>
            <td>  {address}</td>
            <td>  {time}</td>
            <td>  {date}</td>
            <td>  {phoneNumber}</td>
            <td>  {status}</td>
          </tr>))}
        </table>
      </div>
    );
  }


  loadAll() {
    this.props.orderStore.loadAll();
  }
}
