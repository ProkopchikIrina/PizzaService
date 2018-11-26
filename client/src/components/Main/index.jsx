import React from "react";
import {Switch, Route} from 'react-router-dom';

import Admin from "../Admin"
import Login from "../Login";
import WelcomePage from "../WelcomePage";
import ProductsList from "../ProductsList"
import OrdersTable from '../OrdersTable';
import ShoppingCart from '../ShoppingCart';
import OrderDetailsForm from '../OrderDetailsForm';
import MenuHeader from '../MenuHeader';
import AlertOrderCompleted from '../AlertOrderCompleted';

export default class Main extends React.Component {
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <div>
        <MenuHeader/>
        <Switch>
          <Route path="/hello" component={WelcomePage}/>
          <Route path="/login" component={Login}/>
          <Route path="/administration" component={Admin}/>
          <Route path="/products" component={ProductsList}/>
          <Route path="/orders" component={OrdersTable}/>
          <Route path="/shoppingCart" component={ShoppingCart}/>
          <Route path="/orderDetails" component={OrderDetailsForm}/>
          <Route path="/orderCompleted" component={AlertOrderCompleted}/>
        </Switch>
      </div>
    )
  };
}