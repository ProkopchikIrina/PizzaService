import React from "react";

import UserCreationForm from "../AddUserForm";
import AddProductForm from '../AddProductForm';

export default class Admin extends React.Component {

  render() {
    return (
      <div>
        <UserCreationForm/>
        <AddProductForm/>
      </div>
    );
  }
}