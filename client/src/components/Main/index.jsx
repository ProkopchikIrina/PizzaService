import React from "react";
import {Route, Switch} from 'react-router-dom';

import MenuHeader from '../MenuHeader';
import ShoppingCart from '../ShoppingCart';
import AlertOrderCompleted from '../AlertOrderCompleted';
import ProductsList from '../ProductsList';
import OrderDetailsForm from '../OrderDetailsForm';
import Login from '../Login';
import Admin from '../Admin';
import OrdersTable from '../OrdersTable';
import AddProductForm from '../AddProductForm';
import AddUserForm from '../AddUserForm';
import UsersTable from '../UsersTable';
import Constructor from '../Constructor';
import SlideShow from '../SlideShow';
import {inject} from "mobx-react";
import AddIngredientForm from "../AddIngredientForm";
import IngredientsTable from "../IngredientsTable";

@inject('userAuthStore')
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.user) {
      this.props.userAuthStore.signIn(this.props.user.username, this.props.user.password);
    }
  }
  render() {
    return (
      <div>
        <MenuHeader/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/administration" component={Admin}/>
          <Route path="/constructor" component={Constructor}/>
          <Route path="/addProduct" component={AddProductForm}/>
          <Route path="/addUser" component={AddUserForm}/>
          <Route path="/addIngredient" component={AddIngredientForm}/>
          <Route path="/orders" component={OrdersTable}/>
          <Route path="/shoppingCart" component={ShoppingCart}/>
          <Route path="/orderDetails" component={OrderDetailsForm}/>
          <Route path="/orderCompleted" component={AlertOrderCompleted}/>
          <Route path="/usersTable" component={UsersTable}/>
          <Route path="/ingredientsTable" component={IngredientsTable}/>
          <Route path="/menu" component={ProductsList}/>
          <Route path="/" component={SlideShow}/>
        </Switch>
      </div>
    )
  };
}