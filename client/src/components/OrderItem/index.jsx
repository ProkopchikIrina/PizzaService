import React from "react";

export default class OrderItem extends React.Component {
  render() {
    const {props: {orderItem}} = this;
    return (
      (<div>{orderItem.product.title} - {orderItem.count} шт.<br/></div>)
    );
  }
}
