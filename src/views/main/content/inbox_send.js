import React from 'react';
import './form_chat.css';

function InboxSend(props) {
    console.log(props.listInbox)
    return (
        props.listInbox.map((value, index) => (
            <div className='send_contend' key={index}>
                <p className='inbox_send'>{value.out_text}</p>
                <p className='time_send'>{value.currenNow} {value.status}</p>
            </div>
        ))
    );
}
export default InboxSend;