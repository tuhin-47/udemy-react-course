import React from 'react';
import './Person.css';

/* const person = (props) =>{
return(
    <div className="Person">
     <p onClick={props.click}> I am from function component. Dynamic Content Name : {props.name}, Age : {props.age}</p>
     <p> {props.children}</p>
     <input className="TextInput" type="text" onChange={props.updateChange} value={props.name}/>
     </div>
);
} */



const person = (props) =>{
   return ( <div className="Person" onClick={props.click}>
        <h3> {props.name}</h3>
        <p> {props.content} </p>
    </div>
   );
}

export default person;