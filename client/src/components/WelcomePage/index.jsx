import React from "react";
import {Redirect} from 'react-router';


export default class WelcomePage extends React.Component {
  handleOnClick = () => {
    return <Redirect push to="/login"/>;
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleOnClick()}>Login</button>
      </div>
    );
  }
}