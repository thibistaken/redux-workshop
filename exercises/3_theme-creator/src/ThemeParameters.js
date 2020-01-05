import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class ThemeParameters extends Component {
  constructor(props) {
    super(props);
  }
  setFontColor = e => {
    this.props.dispatch({ type: "SET_FONT_COLOR", payload: e.target.value });
  };

  setFontFamily = e => {
    this.props.dispatch({
      type: "SET_FONT_FAMILY",
      payload: e.target.value
    });
  };
  setItalic = e => {
    this.props.dispatch({
      type: "SET_FONT_STYLE",
      payload: e.target.checked ? "italic" : "normal"
    });
  };
  setBold = e => {
    this.props.dispatch({
      type: "SET_FONT_WEIGHT",
      payload: e.target.checked ? "bold" : "normal"
    });
  };

  render = () => {
    return (
      <div>
        <div>
          {" "}
          Pick your color
          <input onChange={this.setFontColor} type="color" />
        </div>
        <div>Pick your font</div>
        <div>
          <input
            type="radio"
            name="fontgroup"
            value="arial"
            onChange={this.setFontFamily}
          />{" "}
          Arial
          <input
            type="radio"
            name="fontgroup"
            value="times new roman"
            onClick={this.setFontFamily}
          />{" "}
          Times new roman
        </div>
        <div>
          <input type="checkbox" onChange={this.setItalic} /> italic
        </div>
        <div>
          <input type="checkbox" onChange={this.setBold} /> bold
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ThemeParameters);
