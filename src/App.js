import React, { Component } from 'react';
import './App.css';
import Dummy from './Dummy/Dummy';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    textLength: 0,
    text: ""
  }

  textLengthHandler = (event) => {
    this.setState({ 
      textLength: event.target.value.length,
      text: event.target.value
    });
  }

  deleteCharHandler 

  render() {
    return (
      <div className="App">
          <input type="text" onChange={this.textLengthHandler}/>
          <p>{this.state.textLength}</p>
          <ValidationComponent textLength={this.state.textLength} />
          {this.state.text.split('').map((character, index) => {
            return <CharComponent char={character} index={index}/>
          })}
      </div>
    );
  }
}

export default App;
