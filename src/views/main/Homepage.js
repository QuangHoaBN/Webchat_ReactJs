import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {SideBar, FriendList} from './sidebar'
import './main.css'

export default class Homepage extends React.Component {
    render() {
        return (
            <div class = "fluid-container">
                <div class = "col-2">
                    <SideBar />
                </div>
                <div class = "col-10">
                    
                </div>
            </div>
        )
    }
}
