import React from "react";
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';
import {inject, observer} from 'mobx-react/index';
import './style.css';
import NoRightsMessage from '../NoRightsMessage';

@inject('userAuthStore')
@observer
export default class AdminMenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    if (this.props.userAuthStore.user == null) {
      return <NoRightsMessage/>
    }
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
            <NavLink href="#/administration">Управление</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/orders">Заказы пользователей</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#/constructor">Конструктор</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              {this.props.username}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href='/logout' onClick={this.handleLogout}>
                Выйти
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    )
  };

  handleLogout(event) {
    event.preventDefault();
    this.props.userAuthStore.logOut();
  }
}