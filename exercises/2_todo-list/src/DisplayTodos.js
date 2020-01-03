import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

// This component doesn't use any data in the store! Fix this.
class DisplayTodos extends Component {
  handleRemoveList = () => {
    {
      let todos = this.props.todos;
      todos = [];
    }
  };
  render = () => {
    return (
      <div>
        <h3>All todos</h3>
        {this.props.todos.map(todo => {
          return <li>{todo}</li>;
        })}
      </div>
    );
  };
}

let mapStateToProps = function(state) {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(DisplayTodos);
