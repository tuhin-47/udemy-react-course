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

  buttonClickHandler = (newValue)=>{
    this.setState({
      persons:[
      {
        name : newValue,
        age: 27
      },
      {
        name : "Changed using state 2",
        age: 28
      },
      {
        name : "Changed using state 3",
        age: 29
      },
      {
        name : "Changed using state 4",
        age: 30
      }
     
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1> React is Working :-) !!!</h1>
        <p> I am a p 'tag' inside component. </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <button onClick={this.buttonClickHandler.bind(this,'Hasan Mahmud Tuhin')}> Change Something </button>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.buttonClickHandler.bind(this,'Tuhin')}> Ben brought me this course! Thanks to him.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}



export default App;
