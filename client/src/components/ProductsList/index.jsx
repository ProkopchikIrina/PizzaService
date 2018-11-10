import React from "react";
import {inject, observer} from "mobx-react/index";

import ProductsListItem from '../ProductListItem'

@inject('productStore')
@observer
export default class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.loadAll();
  }

  render() {
    const {props: {productStore: {products}}} = this;
    return (
      <div>
        {products.map(({id, name, price, weight}) => (
          <ProductsListItem id={id} name={name} price={price} weight={weight}/>))}
      </div>
    );
  }

  loadAll() {
    this.props.productStore.loadAll();
  }
}
