import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
        <div className="OutputBox">
            <h2>{props.name}</h2>
            <p>{props.content}</p>
        </div>
    );
}

export default userOutput;