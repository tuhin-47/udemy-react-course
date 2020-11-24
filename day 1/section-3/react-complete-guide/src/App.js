import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /* state = {
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

    const btnInlineStyle = {
      backgroundColor: 'lightgreen',
      font:'inherit',
      fontSize:'1.5rem',
      padding:'0.5rem',
      border:'1px solid gray',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <h1> React is Working :-) !!!</h1>
        <p> I am a StateFull Component </p>
        <button style={btnInlineStyle} onClick={this.buttonClickHandler.bind(this,'Hasan Mahmud Tuhin')}> Change Something </button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} updateChange={this.changeHandlerFirst}/>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.buttonClickHandler.bind(this,'Tuhin')} updateChange = {this.changeHandlerSecond}> Ben brought me this course! Thanks to him.</Person>

       
      </div>
    );
  } */

  state = {
    persons:[
      {id:'1', name:'Tuhin',content:'Cool Person, fun good love to read'},
      {id:'2', name:'Ben', content:'Nice guy, Good , supportive helpful'},
      {id:'3', name:'Jhon Doe', content:'Just a place holder'}
    ],
    isDisplyContent : false,
  };

  toggleHandler = ()=>{
    
    let isVisible = this.state.isDisplyContent;
    this.setState({
      isDisplyContent: !isVisible
    })
  }

  deleteHandler =(index) =>{
    let persons = [...this.state.persons];
    let person = persons[index];
    person.key=Math.ceil(Math.random() *100);
    persons.push(person)
    this.setState({persons})
  }
 
  
  render(){

    let persons = null;
    if(this.state.isDisplyContent){
      persons = (
        <div>
          {this.state.persons.map(
            (person,index) =>{
              return ( <Person 
                        click = {this.deleteHandler.bind(this,index)}
                        name={person.name}
                        content ={person.content}
                        
              />);
            }
          )}
        </div>
      );
     }
     return (
        <div className="App">
           <h2>Using React Lists</h2>
           <button onClick={this.toggleHandler}>Show/Hide Items</button>
           <h4> Click on any item to make a duplicate copy</h4>
           {persons}
           
        </div>
       );
    }
}



export default App;
