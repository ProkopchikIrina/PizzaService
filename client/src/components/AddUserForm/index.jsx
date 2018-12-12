import React from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

@inject('userStore','userAuthStore')
@observer
export default class UserCreationForm extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state                = {username: '', password: '', email: '', role: {id: 1}};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange    = this.handleEmailChange.bind(this);
    this.handleRoleChange     = this.handleRoleChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    if (this.props.userAuthStore.user == null) {
      return (
        <div>
          <h5>У Вас недостаточно прав для просмотра данной страницы</h5>
          <Button color="secondary" size="lg" block href="#/login">Войти</Button>
        </div>
      )
    }
    return (
      <Container>
        <Row>
          <Col sm={{size: 10, order: 1, offset: 1}}>
            <Card>
              <CardBody>
                <CardTitle>Добавить пользователя</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name">Имя пользователя</Label>
                    <Input type="text" name="name" id="name" placeholder="Введите имя пользователя" value={this.state.username}
                           onChange={this.handleUsernameChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Пароль</Label>
                    <Input type="password" name="password" id="password" placeholder="Введите пароль пользователя" value={this.state.password}
                           onChange={this.handlePasswordChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">E-mail</Label>
                    <Input type="email" name="email" id="email" placeholder="Введите e-mail" value={this.state.email} onChange={this.handleEmailChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="role">Роль</Label>
                    <Input type="select" name="role" id="role" placeholder="Введите e-mail" onChange={this.handleRoleChange}>
                      <option value={1}>Администратор</option>
                      <option value={2}>Водитель</option>
                    </Input>
                  </FormGroup>
                  <Button type="submit" color="secondary" size="lg" block disabled={this.checkRequiredFieldsState()}>Добавить</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
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
   * Handles changes in email input field
   * @param event
   */
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  /**
   * Handles changes in role input field
   * @param event
   */
  handleRoleChange(event) {
    this.setState({role: {id:parseInt(event.target.value, 10)}});
  }

  /**
   * Handles form submit
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.userStore.create(this.state);
    this.setState({username: '', password: '', email: '', role: {id: 1}});
  }

  /**
   * Checks state of required fields
   */
  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.username && state.password && state.email);
  }
}