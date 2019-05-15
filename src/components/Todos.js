import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <div>
        <Todoitem todo={todo} />
      </div>
      
    ));
  }  
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}


export default Todos;