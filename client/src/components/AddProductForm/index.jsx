import React from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { FilePond } from 'react-filepond';
import axios from 'axios'
import 'filepond/dist/filepond.min.css';
import NoRightsMessage from '../NoRightsMessage';

@inject('productStore', 'userAuthStore')
@observer
export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {product: {title: '', ingredients: '', price: '', weight: '', image: ''}, images: [] };

    this.handleTitleChange       = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handlePriceChange       = this.handlePriceChange.bind(this);
    this.handleWeightChange      = this.handleWeightChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
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
                <CardTitle>Добавить продукт</CardTitle>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="title">Название</Label>
                    <Input type="text" name="title" id="title" placeholder="Введите название продукта" value={this.state.product.title}
                           onChange={this.handleTitleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="ingredients">Состав</Label>
                    <Input type="text" name="ingredients" id="examplePassword" placeholder="Введите состав" value={this.state.product.ingredients}
                           onChange={this.handleIngredientsChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="weight">Вес</Label>
                    <Input type="number" name="weight" id="weight" placeholder="Введите вес" value={this.state.product.weight} onChange={this.handleWeightChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="price">Цена</Label>
                    <Input type="number" name="price" id="price" placeholder="Введите цену" value={this.state.product.price} onChange={this.handlePriceChange}/>
                  </FormGroup>
                  <FilePond  ref={ref => (this.pond = ref)}
                             files={this.state.images}
                             allowMultiple={false}
                             onupdatefiles={fileItems => {
                               this.setState({
                                 images: fileItems.map(fileItem => fileItem.file)
                               });
                             }}/>
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

  handleTitleChange(event) {
    this.setState({product: {title: event.target.value, ingredients: this.state.product.ingredients, price: this.state.product.price, weight: this.state.product.weight}});
    console.log(this.state.product);
  }

  handleIngredientsChange(event) {
    this.setState({product: {title: this.state.product.title, ingredients: event.target.value, price: this.state.product.price, weight: this.state.product.weight}});
    console.log(this.state.product);
  }

  handlePriceChange(event) {
    this.setState({product: {title: this.state.product.title, ingredients: this.state.product.ingredients, price: event.target.value, weight: this.state.product.weight}});
    console.log(this.state.product);
  }

  handleWeightChange(event) {
    this.setState({product: {title: this.state.product.title, ingredients: this.state.product.ingredients, price: this.state.product.price, weight:  event.target.value}});
    console.log(this.state.product);
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.images[0]);
    const fd = new FormData();
    const imageName = this.state.images[0].name;
    await fd.append('image', this.state.images[0], imageName);
    await this.setState({product: {title: this.state.product.title, ingredients: this.state.product.ingredients, price: this.state.product.price, weight: this.state.product.weight, image: imageName}
    });
    await this.props.productStore.create(this.state.product);
    axios.post('https://us-central1-imagesstorage-e5c86.cloudfunctions.net/uploadFile', fd)
        .then(
        res =>{
            console.log(res);
        }
    );
    this.setState({product: {title: '', ingredients: '', price: '', weight: '', image: ''}, images: [] });
  }

  checkRequiredFieldsState() {
    let state = this.state;
    return !(state.product.title && state.product.ingredients && state.product.price && state.product.weight);
  }
}
