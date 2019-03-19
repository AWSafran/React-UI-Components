import React from 'react';
import './Button.css';

function OperatorButton(props) {
    console.log(props);
    console.log(`Creating the ${props.text} button!`);
    return <div className={props.buttonStyle}>{props.text}</div>;
}


export default OperatorButton;