import React from 'react';
import './Button.css';

function NumberButton(props) {
    return <div className={props.number.buttonStyle}>{props.number.text}</div>;
}


export default NumberButton;