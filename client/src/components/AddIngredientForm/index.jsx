import React from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import NoRightsMessage from '../NoRightsMessage';

@inject('ingredientStore', 'userAuthStore')
@observer
export default class AddIngredientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state                = {name: '', weight: '', price: ''};
    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handlePriceChange    = this.handlePriceChange.bind(this);
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
                <CardTitle>Добавить ингредиент</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="name">Название ингредиента</Label>
                    <Input type="text" name="name" id="name" placeholder="Введите название ингредиента" value={this.state.name}
                           onChange={this.handleIngredientNameChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="weight">Вес ингредиента</Label>
                    <Input type="number" name="weight" id="weight" placeholder="Введите вес ингредиента" value={this.state.weight}
                           onChange={this.handleWeightChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="price">Стоимость ингредиента</Label>
                    <Input type="number" name="price" id="price" placeholder="Введите вес ингредиента" value={this.state.price}
                           onChange={this.handlePriceChange}/>
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

  handleIngredientNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleWeightChange(event) {
    this.setState({weight: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.ingredientStore.create(this.state);
    this.setState({name: '', weight: '', price: ''});
  }

  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.name && state.weight && state.price);
  }
}