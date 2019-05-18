import React from "react";
import {Button} from 'reactstrap';

export default class NoRightsMessage extends React.Component {
  render() {
    return (
      <div>
        <h5>У Вас недостаточно прав для просмотра данной страницы</h5>
        <Button color="secondary" size="lg" block href="#/login">Войти</Button>
      </div>
    )
  };
}