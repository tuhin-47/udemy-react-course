import React from 'react';
import './UserInput.css';

const userInput = (props) =>{

    return (
        <div className='UserInput'>
            Give Title : <input type="text" onChange={props.eventHandler} value={props.name}/>
        </div>
    );
}

export default userInput;