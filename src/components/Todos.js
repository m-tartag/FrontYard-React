import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  markComplete = () => {
    console.log("Hello");
  };

  render() {
    return this.props.todos.map(todo => (
      <div>
        <Todoitem key={todo.id} todo={todo} markComplete={this.markComplete} />
      </div>
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
