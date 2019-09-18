import React, { Component } from 'react';
import './author.css';

function Button(props) {
    return <button className='btn'>{props.name}</button>;
}

export default Button;