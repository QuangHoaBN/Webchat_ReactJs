import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import Ads from "./content";
import './main.css'


export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                 <div class = "fluid-container">
                    <div className='row'>
                    <div class = "col-3">
                        <SideBar />
                    </div>
                    <div class = "col-9">
                        <Ads />
                    </div>
                    </div>
                </div>
            </div> 
        )
    }
}
