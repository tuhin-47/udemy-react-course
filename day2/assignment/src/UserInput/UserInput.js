import React from 'react';
import './UserInput.css';

const userInput = (props) =>{

    return (
        <div className='UserInput'>
            Give Title : <input type="text" onChange={props.titleEventHandler} value={props.name}/>
            Give Content: <textarea rows='4' cols='50' onChange={props.contentEventHandler} value={props.content} />
        </div>
    );
}

export default userInput;