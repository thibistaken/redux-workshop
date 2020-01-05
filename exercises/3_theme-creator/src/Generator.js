import React, { Component } from "react";
import { connect } from "react-redux";
import faker from "faker";

class Generator extends Component {
  handleClick = () => {
    let randomString = "";
    for (let i = 0; i < 10; i++) {
      randomString += faker.random.words() + " ";
    }
    this.props.dispatch({ type: "SET_TEXT", payload: randomString });
  };
  render = () => {
    return (
      <div>
        <button onClick={this.handleClick}>Random text</button>
      </div>
    );
  };
}

export default connect()(Generator);
