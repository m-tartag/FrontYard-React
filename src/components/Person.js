import React, { Component } from "react";
import "./Person.css";
export class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          Name: {this.props.first} {this.props.last}
        </p>
        <p>Age: {this.props.age}</p>
        <p>E-mail: {this.props.email}</p>
        <p>Location: {this.props.location}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.first}
        />
      </div>
    );
  }
}

export default Person;
