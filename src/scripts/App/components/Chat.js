import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(e) {
    e.preventDefault();
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <form className="input" onSubmit={e => this.submitMessage(e)}>
          <input
            type="text"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chat;
