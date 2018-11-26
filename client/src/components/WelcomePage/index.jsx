import React from "react";
import {Redirect} from 'react-router';


export default class WelcomePage extends React.Component {
  handleOnClick = () => {
    return <Redirect push to="/login"/>;
  };
  /**
   * Renders component
   * @returns rendered component
   */
  render() {
    return (
      <div>
        <button onClick={() => this.handleOnClick}>Login</button>
      </div>
    );
  }
}