import React, { Component } from 'react';
import './author.css';

function Button(props) {
    return <button onClick={props.LoginClick} className='btn'>{props.name}</button>;
}

export default Button;