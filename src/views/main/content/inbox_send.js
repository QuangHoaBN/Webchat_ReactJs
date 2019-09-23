import React from 'react';
import './form_chat.css';

function InboxSend(props) {
    return (
        <div>
            <div className='receive'>
                <div className='receive_content'>

                </div>
            </div>
            <div className='send'>
                <div className='send_contend'>
                    <p className='inbox_send'>{props.content}</p>
                    <p className='time_send'>{props.date} {props.status}</p>
                </div>
            </div>
        </div>
        // props.listInbox.map((value, index) => (
        //     <div className='send_contend' key={index}>
        //         <p className='inbox_send'>{value.out_text}</p>
        //         <p className='time_send'>{value.currenNow} {value.status}</p>
        //     </div>
        // ))
    );
}
export default InboxSend;