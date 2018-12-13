import React from "react";
import AdminMenuHeader from '../AdminMenuHeader';
import GuestMenuHeader from '../GuestMenuHeader';
import {inject, observer} from 'mobx-react/index';

@inject('userAuthStore')
@observer
export default class MenuHeader extends React.Component {
  render() {
    return this.getMenuHeader();
  };

  getMenuHeader() {
    const user = this.props.userAuthStore.user;
    if (user != null) {
      return <AdminMenuHeader username={user.username}/>
    }
    return <GuestMenuHeader/>;
  }
}