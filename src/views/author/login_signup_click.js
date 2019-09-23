import React, { Component } from 'react';
import './author.css';

function Button(props) {
    return <button onClick = {() => props.onClick(props.username, props.password)} className='btn'>{props.name}</button>;
}

export default Button;