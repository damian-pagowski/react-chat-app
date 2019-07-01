import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddMessageForm from "./AddMessageForm";
import MessageHistory from "./MessageHistory";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" },
    ],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <MessageHistory username={users[0].username} messages={this.state.messages} />
            <AddMessageForm
              username={users[0].username}
              addMessageCallback={this.addMessage.bind(this)}
            />
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <MessageHistory username={users[1].username} messages={this.state.messages} />
            <AddMessageForm
              username={users[1].username}
              addMessageCallback={this.addMessage.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }

  addMessage(message) {
    this.setState( { messages : [message, ...this.state.messages]})
  }
}

export default App;
