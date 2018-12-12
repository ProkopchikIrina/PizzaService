import React from "react";
import {inject, observer} from "mobx-react/index";
import {Table} from 'reactstrap';

import OrdersTableRow from '../OrdersTableRow'

@inject('orderStore')
@observer
export default class OrdersTable extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.loadAll();
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    const {props: {orderStore: {orders}}} = this;
    return (
      <Table>
        <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Адрес доставки</th>
          <th>Номер телефона</th>
          <th>Элементы заказа</th>
          <th>Статус</th>
        </tr>
        </thead>
        {orders.map((order) => (<OrdersTableRow order={order}/>))}
      </Table>
    );
  }

  loadAll() {
    this.props.orderStore.loadAll();
  }
}