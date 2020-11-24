import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    content: [
      {title:'Default Title 1', content:'Content 1'},
      {title: 'Default Title 2', content: 'Content 2'}
    ]
  };

  firstTitleEventHandler = (event)=>{
    this.setState(
      {
        content:[
          { title: event.target.value, content: this.state.content[0].content},
          { title: this.state.content[1].title, content: this.state.content[1].content}
        ]
      }
    )

  }

  firstContentEventHandler = (event) =>{
    this.setState(
      {
        content:[
          {title: this.state.content[0].title, content: event.target.value},
          {title: this.state.content[1].title, content: this.state.content[1].content}
        ]
      }
    )
  }

  secondTitleEventHandler = (event) =>{
    this.setState(
      {
        content:[
          {title: this.state.content[0].title, content: this.state.content[0].content},
          {title: event.target.value, content: this.state.content[1].content}
        ]
      }
    )
  }

  secondContentEventHandler = (event) =>{
    this.setState(
      {
        content:[
          {title:this.state.content[0].title, content: this.state.content[0].content},
          {title: this.state.content[0].title, content: event.target.value}
        ]
      }
    )
  }

  render(){
    return (
      <div className="App">
        <h1> React Event Handling </h1>
        <UserInput name={this.state.content[0].title} content={this.state.content[0].content} titleEventHandler={this.firstTitleEventHandler} contentEventHandler={this.firstContentEventHandler}/>
        <UserInput name={this.state.content[1].title} content={this.state.content[1].content} titleEventHandler={this.secondTitleEventHandler} contentEventHandler={this.secondContentEventHandler} />
        
        <UserOutput name={this.state.content[0].title} content={this.state.content[0].content}/>
        <UserOutput name={this.state.content[1].title} content={this.state.content[1].content} />
      </div>
    );
  }
}

export default App;
