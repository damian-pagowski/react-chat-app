import React, {Component} from 'react'

class MessageHistory extends Component {
  render () {
    return (
      <div >
        <div className='name sender'>
          {this.props.username}
        </div>
        <ul className='message-list scrollable'>
          {this.props.messages.map((message, index) =>
            <li
              key={index}
              className={
                message.username === this.props.username
                  ? 'message sender'
                  : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default MessageHistory