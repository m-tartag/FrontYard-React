import React, { Component } from "react";
import PropTypes from "prop-types";
export class Todoitem extends Component {
  // Change CSS with STATE using TERNARY operator.. way shorter than conventional
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete} />
        {this.props.todo.title}
      </div>
    );
  }
}

// PropTypes
Todoitem.propTypes = {
  todos: PropTypes.object.isRequired
};

export default Todoitem;
