import React from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NoRightsMessage from '../NoRightsMessage';

@inject('userStore', 'userAuthStore')
@observer
export default class UserCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state                = {username: '', password: '', email: '', role: {id: 1}};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange    = this.handleEmailChange.bind(this);
    this.handleRoleChange     = this.handleRoleChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  render() {
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
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

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleRoleChange(event) {
    this.setState({role: {id: parseInt(event.target.value, 10)}});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.userStore.create(this.state);
    this.setState({username: '', password: '', email: '', role: {id: 1}});
  }

  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.username && state.password && state.email);
  }
}