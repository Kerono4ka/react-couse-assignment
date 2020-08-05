import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends React.Component {
  state = {
    username: 'Olyaaaa',
  }

  userInputHandler = (event) => {
    if (event.key === "Enter") {
      this.setState({
        username: event.target.value,
      })
    }
  }

  render() {
    const size = 2;
    const outputElements = Array(size).fill( <UserOutput username={this.state.username}/>);

    return (
      <div className="App">
        <UserInput onKeyPress={this.userInputHandler} username={this.state.username} />
        {outputElements}
      </div>
    );
  }

}

export default App;
