import React from "react";
import {Navbar, NavLink, NavbarBrand} from 'reactstrap';

export default class MenuHeader extends React.Component {
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#/">Главная</NavbarBrand>
        <NavLink href="#/products">Меню</NavLink>
        <NavLink href="#/administration">Управление</NavLink>
        <NavLink href="#/orders">Заказы пользователей</NavLink>
        <NavLink href="#/shoppingCart">Корзина</NavLink>
      </Navbar>
    )
  };
}