import React from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

@inject('productStore','userAuthStore')
@observer
export default class AddProductForm extends React.Component {
  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.state = {title: '', ingredients: '', price: '', weight: ''};

    this.handleTitleChange       = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handlePriceChange       = this.handlePriceChange.bind(this);
    this.handleWeightChange      = this.handleWeightChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
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
                <CardTitle>Добавить продукт</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="title">Название</Label>
                    <Input type="text" name="title" id="title" placeholder="Введите название продукта" value={this.state.title}
                           onChange={this.handleTitleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Состав</Label>
                    <Input type="text" name="ingredients" id="examplePassword" placeholder="Введите состав" value={this.state.ingredients}
                           onChange={this.handleIngredientsChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="weight">Вес</Label>
                    <Input type="number" name="weight" id="weight" placeholder="Введите вес" value={this.state.weight} onChange={this.handleWeightChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="price">Цена</Label>
                    <Input type="number" name="price" id="price" placeholder="Введите цену" value={this.state.price} onChange={this.handlePriceChange}/>
                  </FormGroup>
                  <Button color="secondary" size="lg" block disabled={this.checkRequiredFieldsState()}>Добавить</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
      ;
  }

  /**
   * Handles changes in title input field
   * @param event
   */
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  /**
   * Handles changes in ingredients input field
   * @param event
   */
  handleIngredientsChange(event) {
    this.setState({ingredients: event.target.value});
  }

  /**
   * Handles changes in price input field
   * @param event
   */
  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  /**
   * Handles changes in weight input field
   * @param event
   */
  handleWeightChange(event) {
    this.setState({weight: event.target.value});
  }

  /**
   * Handles form submit
   * @param event
   */
  handleSubmit(event) {
    event.preventDefault();
    this.props.productStore.create(this.state);
    this.setState({title: '', ingredients: '', price: '', weight: ''});
  }

  /**
   * Checks state of required fields
   */
  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.title && state.ingredients && state.price && state.weight);
  }
}