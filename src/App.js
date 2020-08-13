import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends React.Component {
  state = {
    text: 'Anton Olyaaaa Anton',
  }

  handleTextInput = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleLetterDeletion = (letter) => {
    const re = new RegExp(letter, 'gi');
    let text = this.state.text.slice();
    text = text.replace(re, '');

    this.setState({text: text});
  }

  render() {
    const {text} = this.state;

    return (
      <div className="App">
        <UserInput onChange={this.handleTextInput} text={text} />
        <UserOutput text={text} onLetterClick={(letter) => this.handleLetterDeletion(letter)}/>
      </div>
    );
  }

}

export default App;
