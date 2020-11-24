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
  
  changeHandlerFirst = (event) =>{
    this.setState({
      persons:[
        {
          name : event.target.value,
          age: 27
        },
        {
          name : this.state.persons[1].name,
          age: this.state.persons[1].age
        },
        {
          name : this.state.persons[2].name,
          age: this.state.persons[2].age
        },
        {
          name : this.state.persons[3].name,
          age: this.state.persons[3].age
        }
       
        ]
      }
        );
      }


      changeHandlerSecond = (event) =>{
        this.setState({
          persons:[
            {
              name : this.state.persons[0].name,
              age: 27
            },
            {
              name : event.target.value,
              age: this.state.persons[1].age
            },
            {
              name : this.state.persons[2].name,
              age: this.state.persons[2].age
            },
            {
              name : this.state.persons[3].name,
              age: this.state.persons[3].age
            }
           
            ]
          }
            );
          }

  render() {
    return (
      <div className="App">
        <h1> React is Working :-) !!!</h1>
        <p> I am a StateFull Component </p>
        <button onClick={this.buttonClickHandler.bind(this,'Hasan Mahmud Tuhin')}> Change Something </button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} updateChange={this.changeHandlerFirst}/>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.buttonClickHandler.bind(this,'Tuhin')} updateChange = {this.changeHandlerSecond}> Ben brought me this course! Thanks to him.</Person>

       
      </div>
    );
  }
}



export default App;
