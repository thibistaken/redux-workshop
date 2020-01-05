import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Generator from "./Generator.js";

class Preview extends Component {
  render = () => {
    let myStyle = {
      height: "100vh",
      width: "50vh",
      padding: "30px",
      fontStyle: this.props.fontStyle,
      fontFamily: this.props.fontFamily,
      color: this.props.color,
      fontWeight: this.props.fontWeight,
      text: this.props.text
    };
    return (
      <div style={myStyle}>
        <Generator></Generator>
        {this.props.text}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    fontStyle: state.fontStyle,
    fontFamily: state.fontFamily,
    color: state.color,
    fontWeight: state.fontWeight,
    text: state.text
  };
};

export default connect(mapStateToProps)(Preview);
