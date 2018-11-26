import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';


@inject('orderItemStore')
@inject('orderStore')
@observer
export default class ShoppingCart extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state                       = {orderItems: this.props.orderItems, address: '', telephoneNumber: '', comment: '', status: 'Новый'};
    this.handleAddressChange         = this.handleAddressChange.bind(this);
    this.handleTelephoneNumberChange = this.handleTelephoneNumberChange.bind(this);
    this.handleCommentChange         = this.handleCommentChange.bind(this);
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="address">Адрес доставки</Label>
          <Input type="text" name="address" id="address" placeholder="Введите адрес доставки" value={this.state.address} onChange={this.handleAddressChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="telephoneNumber">Телефон</Label>
          <Input type="text" name="telephoneNumber" id="telephoneNumber" placeholder="Введите номер телефона" value={this.state.telephoneNumber}
                 onChange={this.handleTelephoneNumberChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="comment">Комментарий</Label>
          <Input type="textarea" name="comment" id="comment" placeholder="Введите кометарий к заказу" value={this.state.comment}
                 onChange={this.handleCommentChange}/>
        </FormGroup>
        <Button href="#/orderCompleted">Заказать</Button>
      </Form>
    );
  }

  handleSubmit() {
    this.saveOrder(this.state);
  };

  saveOrder(orderDetails) {
    this.props.orderStore.create(orderDetails);
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handleTelephoneNumberChange(event) {
    this.setState({telephoneNumber: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }
}
