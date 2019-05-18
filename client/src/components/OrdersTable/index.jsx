import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button, Table} from 'reactstrap';

import OrdersTableRow from '../OrdersTableRow'
import NoRightsMessage from '../NoRightsMessage';

@inject('orderStore', 'userAuthStore')
@observer
export default class OrdersTable extends React.Component {
  constructor(props) {
    super(props);
    this.loadAll();
  }

  render() {
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
    }
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
          <th>Конструктор</th>
          <th>Комментарий</th>
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