import React from "react";
import {inject, observer} from "mobx-react/index";
import {Input} from 'reactstrap';
import './style.css';

@inject('ingredientStore')
@observer
export default class IngredientsListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state             = {
            count  : 1,
            ingredient: this.props.ingredient,
            isSelected: false
        };
        this.handleCountChange = this.handleCountChange.bind(this);
        this.handleCheckboxStateChange = this.handleCheckboxStateChange.bind(this);
    }

    render() {
        return (
            <tr>
                <td>{this.state.ingredient.name}</td>
                <td>{this.state.ingredient.weight} г.</td>
                <td>{this.state.ingredient.price} б. р.</td>
                <td><Input type="checkbox" value={this.state.isSelected} onChange={this.handleCheckboxStateChange}/></td>
                <td><Input disabled = {!this.state.isSelected} className="countInput" type="number" value={this.state.count}
                           onChange={this.handleCountChange} min="1" max="10"/></td>
            </tr>
        );
    }

    handleCountChange(event) {
        const count = event.target.value;
        this.setState({
            count: count
        });
        this.removeFromConstructorList(this.state.ingredient.id);
        this.addToConstructorList(this.state.ingredient, count);
    }

    handleCheckboxStateChange(event) {
        const isSelected = event.target.checked;
        this.setState({
            isSelected: isSelected
        });
        if(isSelected) {
            this.addToConstructorList(this.state.ingredient, this.state.count)
        }else {
            this.removeFromConstructorList(this.state.ingredient.id);
        }
    }

    addToConstructorList(ingredient, count) {
        let ingredientItem = {ingredient: ingredient, count: count};
        this.addHandler(ingredientItem);
    }

    removeFromConstructorList(id) {
        this.props.ingredientStore.removeFromSelected(id);
    }

    addHandler(ingredientItem) {
        this.props.ingredientStore.addToSelected(ingredientItem);
    }
}