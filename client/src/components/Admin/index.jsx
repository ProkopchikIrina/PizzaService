import React from "react";
import {Button, Col, Container, Row} from 'reactstrap';
import {inject, observer} from 'mobx-react/index';

@inject('userAuthStore')
@observer
export default class Admin extends React.Component {
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
            <Button color="secondary" size="lg" block href='#/addUser'>Добавить пользователя</Button>
            <Button color="secondary" size="lg" block href='#/addProduct'>Добавить продукт</Button>
            <Button color="secondary" size="lg" block href='#/usersTable'>Список пользователей</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}