import React, { Component } from 'react';
import './form_chat.css';

function Inbox_Send(props) {
    return (
        <div className='send_contend'>
            <p className='inbox_send'>{props.content}</p>
            <p className='time_send'>{props.date} {props.status}</p>
        </div>
    );
}
export default Inbox_Send;