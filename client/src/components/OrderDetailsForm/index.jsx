import React from "react";
import {inject, observer} from "mobx-react/index";
import {Redirect} from "react-router";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

@inject('orderItemStore', 'orderStore')
@observer
export default class OrderDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state                   = {orderItems: null, phoneNumber: '', comment: '', status: 'Новый', date: '', time: '', redirect: false};
    this.handleAddressChange     = this.handleAddressChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleCommentChange     = this.handleCommentChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/orderCompleted"/>;
    }
    return (
      <Container>
        <Row>
          <Col sm={{size: 10, order: 1, offset: 1}}>
            <Card>
              <CardBody>
                <CardTitle>Оформление заказа</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="address">Адрес доставки</Label>
                    <Input type="text" name="address" id="address" placeholder="Введите адрес доставки" value={this.state.address}
                           onChange={this.handleAddressChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="phoneNumber">Телефон</Label>
                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Введите номер телефона" value={this.state.phoneNumber}
                           onChange={this.handlePhoneNumberChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="comment">Комментарий</Label>
                    <Input type="textarea" name="comment" id="comment" placeholder="Введите кометарий к заказу" value={this.state.comment}
                           onChange={this.handleCommentChange}/>
                  </FormGroup>
                  <Button color="secondary" size="lg" block disabled={this.handleFieldsState()}>Заказать</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  saveOrder(orderDetails) {
    this.props.orderStore.create(orderDetails);
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handlePhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleFieldsState() {
    let state = this.state;
    return !(state.address && state.phoneNumber);
  }

  setOrderDateTime() {
    const now = new Date();
    this.setOrderDate(now);
    this.setOrderTime(now)
  }

  setOrderDate(now) {
    this.setState({date: now.getDate() + '.' + (1 + Number(now.getMonth())) + '.' + now.getFullYear()});
  }

  setOrderTime(now) {
    this.setState({time: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()});
  }

  setOrderItems() {
    const {props: {orderItemStore: {shoppingCartItems}}} = this;
    this.setState({orderItems: shoppingCartItems});
  }

  clearCart() {
    this.props.orderItemStore.shoppingCartItems = [];
  }

  async handleSubmit(event) {
    await event.preventDefault();
    try {
      await this.setOrderItems();
      await this.setOrderDateTime();
      await this.saveOrder(this.state);
      await this.clearCart();
      await this.props.history.push('/orderCompleted');
    }
    catch (e) {
      alert(e.message);
    }
  };
}