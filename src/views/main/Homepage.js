import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import {Ads, Form_Chat} from "./content";
import './main.css'


export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowChat: false,
            name: '',
            img: '',
        };
        this.show=this.show.bind(this);
    }
    show(na,im) {
        this.setState({isShowChat: true, name: na, img: im });
    }
    render() {
        return (
            <div className='web-chat-main'>
                 <div class = "container-fluid sidebar-wrapper">
                    <div className='row'>
                    <div class = "col-xl-3 sidebar-wrapper">
                        <SideBar showChat={this.show} onClickLogout = {this.props.onClickLogout} userName = {this.props.userName}/>
                    </div>
                    <div class = "col-xl-9 chat-wrapper_main">
                        {/* eslint-disable-next-line react/jsx-pascal-case */}
                        {!this.state.isShowChat ? <Ads /> : <Form_Chat fImg={this.state.img} fName={this.state.name}/>}
                    </div>
                    </div>
                </div>
            </div> 
        )
    }

}
