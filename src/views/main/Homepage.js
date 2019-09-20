import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import {Ads, Form_Chat} from "./content";
import './main.css'


export default class Homepage extends React.Component {
    render() {
    //     return (
    //         <div className='web-chat'>
    //              <div class = "container-fluid sidebar-wrapper">
    //                 <div className='row'>
    //                 <div class = "col-3 sidebar-wrapper">
    //                     <SideBar />
    //                 </div>
    //                 <div class = "col-9">
    //                     {/* <Ads /> */}
    //                     <Form_Chat />
    //                 </div>
    //                 </div>
    //             </div>
    //         </div> 
    //     )
    // }

        return (
            <div className='web-chat_main'>   
                    <div class = "sidebar-wrapper_main">
                        <SideBar />
                    </div>
                    <div class = "chat-wrapper_main">
                        {/* <Ads /> */}
                        <Form_Chat />
                    </div>
            </div>
        )
    }
}
