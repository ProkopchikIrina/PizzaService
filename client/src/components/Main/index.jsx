import React from "react";
import {Switch, Route, Link} from 'react-router-dom';

import Admin from "../Admin"
import Login from "../Login";
import WelcomePage from "../WelcomePage";
import ProductsList from "../ProductsList"
import OrdersListTable from '../OrdersListTable';

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/hello">Hello</Link></li>

          <li><Link to="/administration">Admin</Link></li>

          <li><Link to="/products">Products</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
        <Switch>
          <Route path="/hello" component={WelcomePage}/>
          <Route path="/login" component={Login}/>

          <Route path="/administration" component={Admin}/>

          <Route path="/products" component={ProductsList}/>

          <Route path="/orders" component={OrdersListTable}/>
        </Switch>
      </div>
    )
  };
}

export default Main;