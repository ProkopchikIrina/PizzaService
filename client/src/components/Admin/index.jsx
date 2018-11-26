import React from "react";

import UserCreationForm from "../AddUserForm";
import AddProductForm from '../AddProductForm';

export default class Admin extends React.Component {
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <div>
        <UserCreationForm/>
        <AddProductForm/>
      </div>
    );
  }
}