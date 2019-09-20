import React, { Component } from 'react';
import './form_chat.css';
import Person from './images/person.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class Form_Chat extends Component {
    render() {
        return (
            <div className='form-chat container-fluid'>
                <div className='header row'>
                    <div>
                        <img width='32px' height='32px' src={Person} alt='error image'></img>
                    </div>
                    <div className='name'>
                        <p>Nguyễn Quang Hòa</p>
                    </div>
                </div>
                <div className='content row'></div>
                <div className='footer row'>
                    <input className='col-xl-10 chat_input' value='' onChange='' placeholder='Nhập ...'></input>
                    <div className='col-xl-2 icon-sent'>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form_Chat;