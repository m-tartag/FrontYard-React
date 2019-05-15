import React, { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  // Establishing State

  state = {
    persons: [
      {
        first: "Matt",
        last: "Tartaglia",
        email: "mattbrs51@gmail.com",
        age: "31",
        location: "Providence"
      }
    ],
    foo: [
      {
        first: "Foo",
        last: "Boo",
        email: "none",
        age: "99",
        location: "Providence"
      }
    ]
  };

  // Switch-Name Handler Function
  // Changes States

  switchNameHandler = newName => {
    console.log("Was Clicked..");
    this.setState({
      persons: [
        {
          first: newName,
          last: "Michaels",
          email: "chizz51@gmail.com",
          age: "39",
          location: "Massachusetts"
        }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          first: event.target.value,
          last: "Michaels",
          email: "chizz51@gmail.com",
          age: "39",
          location: "Massachusetts"
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Charlie")}>
          Switch Name
        </button>
        <h1>
          <Person
            first={this.state.persons[0].first}
            last={this.state.persons[0].last}
            email={this.state.persons[0].email}
            age={this.state.persons[0].age}
            location={this.state.persons[0].location}
            click={this.switchNameHandler.bind(this, "Ronald")}
            changed={this.nameChangeHandler}
          />
        </h1>
      </div>
    );
  }
}

export default App;
