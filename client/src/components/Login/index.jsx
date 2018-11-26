import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router';

import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

@inject('userAuthStore')
@observer
export default class Login extends React.Component {

  signIn(username, password) {
    this.props.userAuthStore.signIn(username, password);
    return <Redirect push to="/admin"/>;
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="j_username">Логин</Label>
            <Input type="text" id="j_username" name="j_username" placeholder="Введите логин"/>
          </FormGroup>
          <FormGroup>
            <Label for="j_password">Логин</Label>
            <Input type="password" id="j_username" name="j_password" placeholder="Введите пароль"/>
          </FormGroup>
        </Form>
        <Button onClick={() => this.signIn(document.getElementsByName("j_username").value,
          document.getElementsByName("j_password").value)}>Войти
        </Button>
      </div>
    );
  }
}