import React, { Component } from 'react';
import './author.css';

function Button(props) {
    return <button onClick = {() => props.email == null ? props.onClick(props.username, props.password): 
            props.onClick(props.username, props.password, props.email)} className='btn'>{props.name}</button>;
}

export default Button;