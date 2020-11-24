import React from 'react';
import './Person.css';

const person = (props) =>{
return(
    <div className="Person">
     <p onClick={props.click}> I am from function component. Dynamic Content Name : {props.name}, Age : {props.age}</p>
     <p> {props.children}</p>
     <input className="TextInput" type="text" onChange={props.updateChange} value={props.name}/>
     </div>
);
}

export default person;