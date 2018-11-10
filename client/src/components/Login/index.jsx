import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router';


@inject('userAuthStore')
@observer
export default class Login extends React.Component {

  signIn(username, password) {
    this.props.userAuthStore.signIn(username, password);
    return <Redirect push to="/admin"/>;
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="j_username"/>
          <br/>
          <input type="password" name="j_password"/>
        </form>
        <button onClick={() => this.signIn(document.getElementsByName("j_username").value,
          document.getElementsByName("j_password").value)}>Войти</button>
      </div>
    );
  }
}