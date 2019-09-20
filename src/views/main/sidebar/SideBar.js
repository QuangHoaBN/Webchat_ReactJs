import React, { Component } from 'react';
import Search from './search'
import FriendList from './FriendList'
import './sidebar.css'

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fList : [],
            onlShow: true
        }
        this.OnlineShow = this.OnlineShow.bind(this);
        this.MessagesShow = this.MessagesShow.bind(this);
        this.SelectChecker = this.SelectChecker.bind(this);
    }

    SelectChecker (choice) {
        if(choice == 'OnlineShow'){
            {this.OnlineShow()};
        }else if(choice == 'MessageShow'){
            {this.MessagesShow()};
        }
    }

    OnlineShow() {
        const fcList = [{imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"},
            {imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"},
            {imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ"}];

        this.setState ({
            fList : fcList,
            onlShow: true
        })
    }

    MessagesShow() {
        const fmList = [{imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ message"},
            {imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ message"}];

        this.setState ({
            fList : fmList,
            onlShow: false
        })
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
        const onlShow = this.state.onlShow;
        return (
            <div>
                <img class="img-fluid logo" src="http://itplus-academy.edu.vn/upload/b7ad33828b0773d8f301805541d453df/files/java/%E1%BA%A2nh/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt="icon"></img>
                <Search/>

                <div class='option d-flex justify-content-between'>
                    <p style={{color: onlShow ? '#dda52d' : ''}} onClick={this.SelectChecker.bind(this, 'OnlineShow')}>
                        <b>Online Friends</b>
                    </p>
                    <p style={{color: onlShow ? '' : '#dda52d'}} onClick={this.SelectChecker.bind(this, 'MessageShow')}>
                        <b>Recent Messages</b>
                    </p>
                </div>    

                <FriendList className='' listFriend = {this.state.fList}/>
            </div>
        );
    }
}

export default SideBar;