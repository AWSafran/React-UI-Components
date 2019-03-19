import React from 'react';
import './Button.css';

function OperatorButton(props) {
    return <div className={props.buttonStyle}>{props.text}</div>;
}


export default OperatorButton;