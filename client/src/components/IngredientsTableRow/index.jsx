import React from "react";
import {inject, observer} from "mobx-react/index";
import {Button} from 'reactstrap';

@inject('ingredientStore')
@observer
export default class IngredientsTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ingredient: this.props.ingredient
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.ingredient.name}
        </td>
        <td>{this.state.ingredient.price}
        </td>
        <td>{this.state.ingredient.weight}
        </td>
        <td><Button onClick={() => this.delete(this.state.ingredient.id)}>Удалить</Button></td>
      </tr>
    );
  }

  delete(id) {
    this.props.ingredientStore.delete(id);
  }
}