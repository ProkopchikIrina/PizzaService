import React from "react";
import {Button, Col, Container, Row} from 'reactstrap';
import {inject, observer} from 'mobx-react/index';
import NoRightsMessage from '../NoRightsMessage';

@inject('userAuthStore')
@observer
export default class Admin extends React.Component {
  render() {
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
    }
    return (
      <Container>
        <Row>
          <Col sm={{size: 10, order: 1, offset: 1}}>
            <Button color="secondary" size="lg" block href='#/addUser'>Добавить пользователя</Button>
            <Button color="secondary" size="lg" block href='#/addProduct'>Добавить продукт</Button>
            <Button color="secondary" size="lg" block href='#/usersTable'>Список пользователей</Button>
            <Button color="secondary" size="lg" block href='#/addIngredient'>Добавить ингредиент</Button>
            <Button color="secondary" size="lg" block href='#/ingredientsTable'>Список ингредиентов</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}