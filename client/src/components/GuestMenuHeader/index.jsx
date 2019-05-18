import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import './style.css';

export default class GuestMenuHeader extends React.Component {
  render() {
    return (
      <Navbar color="light" light expand="md" className="navBar">
        <NavbarBrand href="#">Главная</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink href="#/menu">Меню</NavLink>
            </NavItem>
          <NavItem>
            <NavLink href="#/shoppingCart">Корзина</NavLink>
          </NavItem>
            <NavItem>
                <NavLink href="#/constructor">Конструктор</NavLink>
            </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#/login">Войти</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    )
  };
}