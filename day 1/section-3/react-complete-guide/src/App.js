import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {
        name:"Tuhin",
         age:"100"
      },
      {
        name:"Ben",
        age: "100"
      },
      {
        name:"Jhon", 
        age: "150"
      },
      {
        name:"Jhon Doe", 
        age:"25"
      }
    ]
  };

  buttonClickHandler = ()=>{
    console.log("Click Handler Working fine !");
  }
  render() {
    return (
      <div className="App">
        <h1> React is Working :-) !!!</h1>
        <p> I am a p 'tag' inside component. </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <button onClick={this.buttonClickHandler}> Change Something </button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Ben brought me this course! Thanks to him.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}



export default App;
