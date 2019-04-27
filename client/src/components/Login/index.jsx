import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router';

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';

@inject('userAuthStore')
// @observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state                = {username: '', password: '', error: false};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.userAuthStore.user == null ? null : <Redirect to={"/"}/>}
        <Container>
          <Row>
            <Col sm={{size: 10, order: 1, offset: 1}}>
              <Card>
                <CardBody>
                  <CardTitle>Авторизация</CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="j_username">Логин</Label>
                      <Input type="text" id="username" name="username" placeholder="Введите логин"
                             onChange={this.handleUsernameChange.bind(this)}/>
                    </FormGroup>
                    <FormGroup>
                      <Label for="j_password">Пароль</Label>
                      <Input type="password" id="password" name="password" placeholder="Введите пароль"
                             onChange={this.handlePasswordChange.bind(this)}/>
                    </FormGroup>
                    <Button type="submit" color="secondary" size="lg" block disabled={this.checkRequiredFieldsState()}
                            onClick={this.handleSubmit}>Войти </Button>
                    <Collapse isOpen={this.state.error}>
                      <Card>
                        <CardBody>
                          Неверное имя пользователя или пароль!
                        </CardBody>
                      </Card>
                    </Collapse>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleErrorState() {
    return this.setState({error: true});
  }

  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.username && state.password);
  }

  async handleSubmit(event) {
    await event.preventDefault();
    try {
      await this.props.userAuthStore.signIn(this.state.username, this.state.password);
      if (await this.props.userAuthStore.user != null) {
        console.log(this.props.userAuthStore.user + 1);
        return this.props.history.push('/');
      }
      else {
        console.log(this.props.userAuthStore.user + 2);

        return this.handleErrorState();
      }
    }
    catch (e) {
      alert(e.message);
    }
  }
}