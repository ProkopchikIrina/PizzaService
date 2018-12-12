import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router';

import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

@inject('userAuthStore')
@observer
export default class Login extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state                = {username: '', password: ''};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <div>
        {this.props.userAuthStore.user == null ? null : <Redirect to={"/"}/> }
        <Container>
          <Row>
            <Col sm={{size: 10, order: 1, offset: 1}}>
              <Card>
                <CardBody>
                  <CardTitle>Авторизация</CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="j_username">Логин</Label>
                      <Input type="text" id="j_username" name="j_username" placeholder="Введите логин" value={this.state.username}
                             onChange={this.handleUsernameChange}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="j_password">Пароль</Label>
                      <Input type="password" id="j_password" name="j_password" placeholder="Введите пароль" value={this.state.password}
                             onChange={this.handlePasswordChange}/>
                    </FormGroup>
                    <Button type="submit" color="secondary" size="lg" block disabled={this.checkRequiredFieldsState()} onClick={this.handleSubmit}>Войти </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  /**
   * Handles changes in username input field
   * @param event
   */
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  /**
   * Handles changes in password input field
   * @param event
   */
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  /**
   * Checks state of required fields
   */
  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.username && state.password);
  }

  /**
   * Handles form submit
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.userAuthStore.signIn(this.state.username, this.state.password);
  }
}