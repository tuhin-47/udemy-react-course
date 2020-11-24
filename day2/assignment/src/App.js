import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    title : 'Default Title',
  };

  inputEventHandler = (event)=>{
    this.setState(
      {
        title: event.target.value
      }
    )

  }

  render(){
    return (
      <div className="App">
        <h1> React Event Handling </h1>
        <UserInput name={this.state.username} eventHandler={this.inputEventHandler}/>
        <UserOutput name={this.state.username} content="Title of this box will be taken from above input box."/>
        <UserOutput name="Title 2" content="React JS is awesome. It is fun to learn" />
      </div>
    );
  }
}

export default App;
