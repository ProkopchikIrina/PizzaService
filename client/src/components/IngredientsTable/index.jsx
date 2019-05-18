import React from "react";
import {Button, Table} from 'reactstrap';
import {inject, observer} from "mobx-react/index";

import NoRightsMessage from '../NoRightsMessage';
import IngredientsTableRow from '../IngredientsTableRow'

@inject('ingredientStore', 'userAuthStore')
@observer
export default class IngredientsTable extends React.Component {
  constructor(props) {
    super(props);
    this.loadAll();
  }

  render() {
    const {props: {ingredientStore: {ingredients}}} = this;
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
    }
    return (
      <Table>
        <thead>
        <tr>
          <th>Название ингредиента</th>
          <th>Цена</th>
          <th>Вес</th>
          <th>Удалить ингредиент</th>
        </tr>
        </thead>
        {ingredients.map((ingredient) => (
          <IngredientsTableRow ingredient={ingredient}/>))}
      </Table>
    );
  }

  loadAll() {
    this.props.ingredientStore.loadAll();
  }
}
