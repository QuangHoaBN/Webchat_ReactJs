import React, { Component } from 'react';
import './author.css';

function Login(props){
    return (
        <div className='user_pass'>
            <input type={props.password} value={props.value} onChange={(text) => props.onChange(text.target.value, props.name)} placeholder={props.hint}></input>
        </div>
    );
}

export default Login;