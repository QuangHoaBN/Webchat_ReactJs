import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import {Ads, Form_Chat} from "./content";
import './main.css'


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='web-chat-main'>
                 <div class = "container-fluid sidebar-wrapper">
                    <div className='row'>
                    <div class = "col-xl-3 sidebar-wrapper">
                        <SideBar />
                    </div>
                    <div class = "col-xl-9 chat-wrapper_main">
                        {/* <Ads /> */}
                        <Form_Chat />
                    </div>
                    </div>
                </div>
            </div> 
        )
    }

}
