import React from 'react';
import {BrowserRouter as Router, Redirect, Link} from 'react-router-dom'

export default function UserInfo(props) {
    return (
        <div className = 'user-info_sidebar d-flex justify-content-between'>
            <Router>
                <p>Welcome, {props.userName}</p>
                <Link to='/' onClick = {() => props.onClickLogout()}>Log out</Link>
            </Router>
        </div>
    )};