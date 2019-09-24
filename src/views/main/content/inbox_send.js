import React from 'react';
import './form_chat.css';

function InboxSend(props) {
    return (
        props.listInbox.map((value, index) => ( //arrow function
            <div className='send_contend' key={index}>
                <p className='inbox_send'>{value.out_text}</p>
                {console.log(value)}
                <p className='time_send'>{value.currenNow} {value.status}</p>
            </div>
        ))
    );
}
export default InboxSend;