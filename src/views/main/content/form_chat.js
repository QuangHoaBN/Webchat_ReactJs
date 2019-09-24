import React, { Component } from 'react';
import './form_chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import InboxSend from './inbox_send';

class Form_Chat extends Component {
    constructor(props) {
        super(props);
        let now = new Date();
        this.state= {
            in_text: '',
            out_text:'',
            currenNow: now.getHours()+':'+now.getMinutes(),
            isSended: false,
            status: '',
            list: []
        };
        this.input_text=this.input_text.bind(this);
        this.send=this.send.bind(this);
    }
    input_text(text){
        this.setState({in_text: text.target.value});
    }
    send(){
        // let now =new Date();
        // this.setState({out_text: this.state.in_text, currenNow: now.getHours()+':'+now.getMinutes(), status: 'Đã gửi',isSended: true ,in_text: ''});
        let now =new Date();
        const hList = [{out_text: this.state.in_text, currenNow: now.getHours()+':'+now.getMinutes(), status: 'Đã gửi'}]
        let lists=this.state.list;
        lists.push(hList);
        this.setState({
            isSended: true, 
            list: lists, in_text: ''});
    }
    
    render() {
        return (
            <div className='form-chat container-fluid'>
                <div className='header row'>
                    <div>
                        {/*eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img width='32px' height='32px' src={this.props.fImg} alt='error image'></img>
                    </div>
                    <div className='name'>
                        <p>{this.props.fName}</p>
                    </div>
                </div>
                <div className='content row'>
                    {/* {!this.state.isSended || this.state.out_text==='' ? '' : <InboxSend content={this.state.out_text} date={this.state.currenNow} status={this.state.status}/>} */}
                    {!this.state.isSended ? '' : <InboxSend listInbox={this.state.list} />}
                </div>
                <div className='footer row'>
                    <input className='col-xl-11 chat_input' value={this.state.in_text} onChange={this.input_text} placeholder='Nhập ...'></input>
                    <div className='col-xl-1 icon-sent' onClick={this.send}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Form_Chat;