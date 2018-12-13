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

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <MenuHeader/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/administration" component={Admin}/>
          <Route path="/addProduct" component={AddProductForm}/>
          <Route path="/addUser" component={AddUserForm}/>
          <Route path="/orders" component={OrdersTable}/>
          <Route path="/shoppingCart" component={ShoppingCart}/>
          <Route path="/orderDetails" component={OrderDetailsForm}/>
          <Route path="/orderCompleted" component={AlertOrderCompleted}/>
          <Route path="/usersTable" component={UsersTable}/>
          <Route path="/" component={ProductsList}/>
        </Switch>
      </div>
    )
  };
}