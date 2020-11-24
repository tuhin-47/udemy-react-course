import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> React is Working :-) !!!</h1>
        <p> I am a p tag inside component </p>
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}



export default App;
