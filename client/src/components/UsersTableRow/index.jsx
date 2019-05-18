import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button} from 'reactstrap';

@inject('userStore')
@observer
export default class UsersTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.user.username}
        </td>
        <td>{this.state.user.email}
        </td>
        <td>{this.state.user.role.name}
        </td>
        <td><Button onClick={() => this.delete(this.state.user.id)}>Удалить</Button></td>
      </tr>
    );
  }

  delete(id) {
    this.props.userStore.delete(id);
  }
}