import React from "react";
import {inject, observer} from "mobx-react";

@inject('productStore')
@observer
export default class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', ingredients: '', price: '', weight: ''};

    this.handleTitleChange       = this.handleTitleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handlePriceChange       = this.handlePriceChange.bind(this);
    this.handleWeightChange      = this.handleWeightChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleIngredientsChange(event) {
    this.setState({ingredients: event.target.value});
  }

  handlePriceChange(event) {
    this.setState({price: event.target.value});
  }

  handleWeightChange(event) {
    this.setState({weight: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title + this.state.ingredients + this.state.weight);
    event.preventDefault();
    this.props.productStore.create(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
        </label><br/>
        <label>
          Ingredients:
          <input type="text" value={this.state.ingredients} onChange={this.handleIngredientsChange}/>
        </label><br/>
        <label>
          Price:
          <input type="number" value={this.state.price} onChange={this.handlePriceChange}/>
        </label><br/>
        <label>
          Weight:
          <input type="number" value={this.state.weight} onChange={this.handleWeightChange}/>
        </label><br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}