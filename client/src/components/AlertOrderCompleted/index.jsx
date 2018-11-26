import React from "react";

import {Alert} from 'reactstrap';

export default class AlertOrderCompleted extends React.Component {
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <Alert color="success">
        <h4 className="alert-heading">Заказ успешно совершен!</h4>
        <p>
          В течении 15 минут с Вами свяжется наш администратор для подтверждения заказа.
        </p>
        <hr/>
        <p className="mb-0">
          Если этого не произошло перезвоните по телефону +375251234567
        </p>
      </Alert>
    );
  }
}