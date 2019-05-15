import React, { Component } from "react";

export class Person extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            Name: {this.props.first} {this.props.last}
          </li>
          <li>Age: {this.props.age}</li>
          <li>E-mail: {this.props.email}</li>
          <li>Location: {this.props.location}</li>
        </ul>
      </div>
    );
  }
}

export default Person;
