import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  
  // STATE

  state = {
    todos: [
      {
        id: 1,
        title: 'Led Zepellin',
        completed: false
    },
    {
        id: 2,
        title: 'Iron Maiden',
        completed: false
    },
    {
        id: 3,
        title: 'Black Sabbath',
        completed: false
  }] 
  }

  render() {
    return (
      <div className="App">
        <p><Todos todos={this.state.todos} /></p>
        <code>Never Stop Coding</code>
      </div>

        )
      }
    }

export default App;
