import React, { Component } from 'react';
import './style.css';
import {inject, observer} from "mobx-react";
import IngredientsListItem from '../IngredientsListItem'
import {Table, Input, Button, Label, FormGroup} from 'reactstrap';

@inject('orderItemStore', 'ingredientStore')
@observer
export default class Constructor extends React.Component {
    constructor(props) {
        super(props);
        this.loadAll();
        this.state = {title: '', count:1,  size: 32, basePrice: 4, baseWeight: 250};
        this.handleTitleChange     = this.handleTitleChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
    }

    render() {
        const {props: {ingredientStore: {ingredients}}} = this;
        return (
            <div id="content">
                <Label for ="title">Название</Label>
                <Input type="text" name="title" id="title" placeholder="Введите название пиццы" value={this.state.title}
                       onChange={this.handleTitleChange}/>
                <Label for ="count">Количество</Label>
                       <Input name="count" type="number" value={this.state.count}
                                                                 onChange={this.handleCountChange} min="1" max="10"/>
                <FormGroup tag="fieldset">
                <Label for ="size">Диаметр</Label>
                    <FormGroup check>
                <Label for ="size1">
                    <Input id = "size1" type="radio" name="size" value='{ "size": "32", "weight": "250", "price": "4" }' onChange={this.handleSizeChange} defaultChecked  />{' '}
                    32
                </Label>
                    </FormGroup>
                    <FormGroup check>

                    <Label for ="size2">
                    <Input id = "size2" type="radio" name="size" value='{ "size": "40", "weight": "300", "price": "5" }' onChange={this.handleSizeChange }/>{' '}
                    40
                </Label>
                    </FormGroup>
                    <FormGroup check>

                    <Label for ="size3">

                    <Input id = "size3" type="radio" name="size" value='{ "size": "48", "weight": "350", "price": "6" }' onChange={this.handleSizeChange }/> {' '}
                        48</Label>
                    </FormGroup>
                </FormGroup>
                <Label >Ингредиенты</Label>
            <Table>
                {ingredients.map((ingredient) => (
                    <IngredientsListItem ingredient={ingredient}/>))
                }
            </Table>
            <h5>Сумма: {this.getTotalSum(this.props.ingredientStore.selectedIngredients, this.state.basePrice)} б. р.</h5>
                <h5>Вес: {this.getTotalWeight(this.props.ingredientStore.selectedIngredients, this.state.baseWeight)} г.</h5>
                <Button onClick={() => this.addToCart()}>Добавить в корзину</Button>            </div>
        );
    }

    loadAll() {
        this.props.ingredientStore.loadAll();
    }

    getTotalSum(items, basePrice) {
        let total = basePrice;
        items.map(({ingredient: {price}, count}) => total += price * count);
        return total;
    }

    getTotalWeight(items, baseWeight) {
        let total = baseWeight;
        items.map(({ingredient: {weight}, count}) => total += weight * count);
        return total;
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    addToCart() {
        let result ='';
        const selectedIngredients = this.props.ingredientStore.selectedIngredients;
        selectedIngredients.map((ingredientItem)=> {result += ingredientItem.ingredient.name + ' (x' + ingredientItem.count+ '), '});
        const product = {title: this.state.title +' (' + this.state.size + ')', ingredients: result, weight: this.getTotalWeight(this.props.ingredientStore.selectedIngredients, this.state.baseWeight), price:  this.getTotalSum(this.props.ingredientStore.selectedIngredients, this.state.basePrice)};
        let orderItem = {product: product, count: this.state.count};
        this.props.orderItemStore.addToConstructorStoredItems(orderItem);
        this.props.ingredientStore.selectedIngredients = [];
        this.setState({title: '', count:1,  size: 32, basePrice: 4, baseWeight: 200});
    }

    handleSizeChange(event) {
        console.log(event.target.value);
        const value = JSON.parse(event.target.value);
        console.log(value.price);
        this.setState({size: +value.size, basePrice: +value.price, baseWeight: +value.weight});
    }

    handleCountChange(event) {
        const count = event.target.value;
        this.setState({
            count: count
        });
    }
}
