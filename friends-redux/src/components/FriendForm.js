import React, { Component } from "react";

class FriendForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form className="friends-info">
        <input
          type="text"
          name="name"
          onChange={this.changeHandler}
          value={this.state.name}
        />
        <input
          type="text"
          name="age"
          onChange={this.changeHandler}
          value={this.state.age}
        />
        <input
          type="text"
          name="email"
          onChange={this.changeHandler}
          value={this.state.email}
        />
      </form>
    );
  }
}

export default FriendForm;
