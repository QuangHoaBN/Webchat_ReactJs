import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import {Ads, Form_Chat} from "./content";
import './main.css'


export default class Homepage extends React.Component {
    render() {
        return (
            <div className='web-chat'>
                 <div class = "fluid-container">
                    <div className='row'>
                    <div class = "col-xl-3">
                        <SideBar />
                    </div>
                    <div class = "col-xl-9">
                        {/* <Ads /> */}
                        <Form_Chat />
                    </div>
                    </div>
                </div>
            </div> 
        )
    }
}
