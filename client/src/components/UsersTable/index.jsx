import React from "react";
import {Button, Table} from 'reactstrap';
import {inject, observer} from "mobx-react/index";

import NoRightsMessage from '../NoRightsMessage';
import UsersTableRow from '../UsersTableRow'

@inject('userStore', 'userAuthStore')
@observer
export default class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.loadAll();
  }

  render() {
    const {props: {userStore: {users}}} = this;
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
    }
    return (
      <Table>
        <thead>
        <tr>
          <th>Имя пользователя</th>
          <th>E-mail</th>
          <th>Роль</th>
          <th>Удалить пользователя</th>
        </tr>
        </thead>
        {users.map((user) => (
          <UsersTableRow user={user}/>))}
      </Table>
    );
  }

  loadAll() {
    this.props.userStore.loadAll();
  }
}
