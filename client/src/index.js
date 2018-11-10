import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Main from './components/Main';
import UserAuthStore from "./stores/UserAuthStore";
import UserStore from "./stores/UserStore";
import ProductStore from './stores/ProductStore';
import OrderStore from './stores/OrderStore';
import OrderItemStore from './stores/OrderItemStore';

const stores = {
  userAuthStore: new UserAuthStore(),
  userStore: new UserStore(),
  productStore: new ProductStore(),
  orderStore:new OrderStore(),
  orderItemStore:new OrderItemStore()
};

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter basename="/PizzaService">
      <Main/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

