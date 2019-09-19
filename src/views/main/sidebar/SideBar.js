import React, { Component } from 'react';
import Search from './search'
import FriendList from './FriendList'
import './sidebar.css'

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fList : []
        }
    }

    componentWillMount(){

    }

    componentDidMount(){
        const fcList = [{imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"},
            {imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"},
            {imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"}];

        this.setState ({
            fList : fcList
        })
    }

    render() {
        // console.log(this.state.fList);
        return (
            <div>
                <img class="img-fluid logo" src="http://itplus-academy.edu.vn/upload/b7ad33828b0773d8f301805541d453df/files/java/%E1%BA%A2nh/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt="icon"></img>
                <Search class="search-bar"/>
                <FriendList listFriend = {this.state.fList}/>
            </div>
        );
    }
}

export default SideBar;