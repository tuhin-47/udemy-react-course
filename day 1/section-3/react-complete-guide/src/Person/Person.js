import React from 'react';

const person = (props) =>{
return(
    <div>
     <p onClick={props.click}> I am from function component. Dynamic Content Name : {props.name}, Age : {props.age}</p>
     <p> {props.children}</p>
     </div>
);
}

export default person;