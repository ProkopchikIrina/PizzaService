import React from "react";
import {inject, observer} from "mobx-react/index";

@inject('orderItemStore')
@observer
export default class ProductsListItem extends React.Component {
  count;

  constructor(props) {
    super(props);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  render() {
    return (
      <div><h1>{this.props.name}</h1><br/><h2>{this.props.price}</h2><br/><h3>{this.props.weight}</h3>
        <input type="number" value={this.count} onChange={this.handleCountChange}/>
        <button onClick={() => this.addToCart(this.props.id,this.count)}>Добавить к корзину</button>
      </div>
    );
  }

  handleCountChange(event) {
    this.count = event.target.value;
  }

  addToCart(id,count) {
    let orderItem = {order: null, count: count, product: {id:id}};
    this.props.orderItemStore.create(orderItem);
  }
}