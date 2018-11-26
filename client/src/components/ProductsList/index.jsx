import React from "react";
import {inject, observer} from "mobx-react/index";
import {Table} from 'reactstrap';

import ProductsListItem from '../ProductListItem'

@inject('productStore')
@observer
export default class ProductsList extends React.Component {
  counter;

  /**
   * Constructor of class
   */
  constructor(props) {
    super(props);
    this.loadAll();
  }

  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    const {props: {productStore: {products}}} = this;
    return (
      <Table>
        {products.map((product) => (
          <ProductsListItem product={product}/>))}
      </Table>
    );
  }

  loadAll() {
    this.props.productStore.loadAll();
  }
}
