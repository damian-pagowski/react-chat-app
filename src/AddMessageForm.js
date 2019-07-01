import React, { Component } from "react";

class AddMessageForm extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.message}

          placeholder="Enter your message..."
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
        this.props.addMessageCallback({username : this.props.username, text :this.state.message});
        this.setState({ message: "" });
  };

  handleChange = event => {
    this.setState({ message: event.target.value });
  };

  isDisabled() {
    return this.state.message === "";
  }
}

export default AddMessageForm;
