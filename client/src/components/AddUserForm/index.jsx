import React from "react";
import {inject, observer} from "mobx-react";

@inject('userStore')
@observer
export default class UserCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', email: '', role: {id: 1}};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange    = this.handleEmailChange.bind(this);
    this.handleSubmit         = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        </label><br/>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </label><br/>
        <label>
          Email:
          <input type="email" value={this.state.email} onChange={this.handleEmailChange}/>
        </label><br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.userStore.create(this.state);
  }
}