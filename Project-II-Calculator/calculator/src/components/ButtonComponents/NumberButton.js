import React from 'react';
import './Button.css';

function NumberButton(props) {
    console.log(props.number);
    console.log(`Creating the ${props.number.text} button!`);
    return <div className={props.number.buttonStyle}>{props.number.text}</div>;
}


export default NumberButton;