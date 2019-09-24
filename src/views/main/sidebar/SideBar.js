import React, { Component } from 'react';
import Search from './search'
import FriendList from './FriendList'
import UserInfo from './UserInfo';
import './sidebar.css'

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: [],
            fList: [],
            onlShow: true,
            inputText: ''
        }
        this.OnlineShow = this.OnlineShow.bind(this);
        this.MessagesShow = this.MessagesShow.bind(this);
        this.SelectChecker = this.SelectChecker.bind(this);
        this.onChange = this.onChange.bind(this);
        this.filterData = this.filterData.bind(this);
    }

    SelectChecker(choice) {
        if (choice === 'OnlineShow') {
            { this.OnlineShow() };
        } else if (choice === 'MessageShow') {
            { this.MessagesShow() };
        }
    }

    OnlineShow() {
        const fcList = [{ imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ", fId: 1 },
        { imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Quang Hòa", fId: 2 },
        { imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Hoàn Vũ", fId: 3 }];

        this.setState({
            fList: fcList,
            search: fcList,
            onlShow: true
        })
    }

    MessagesShow() {
        const fmList = [{ imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ message", fId: 1 },
        { imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Quang Hòa message", fId: 2 }];

        this.setState({
            fList: fmList,
            search: fmList,
            onlShow: false
        })
    }

    onChange(text) {
        this.setState({ inputText: text }, () => {
            this.filterData();
        });
    }
    filterData() {
        let searchString = this.state.inputText;
        let respondata = this.state.search;
        if (searchString.length > 0) {
            respondata = respondata.filter(element => {
                return element.fName.toLowerCase().includes(searchString.toLowerCase());
            });
            this.setState({
                fList: respondata
            });
        }
        else this.setState({ fList: this.state.search });

    }
    componentWillMount() {

    }

    componentDidMount() {
        const fcList = [{ imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Lê Vũ", fId: 1 },
        { imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Quang Hòa", fId: 2 },
        { imgUrl: "https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png", fName: "Hoàn Vũ", fId: 3 }];

        this.setState({
            fList: fcList,
            search: fcList
        })
    }

    render() {
        // console.log(this.state.fList);
        const onlShow = this.state.onlShow;
        return (
            <div>
                <div className="fList_sidebar">
                    <UserInfo userName={this.props.userName} onClickLogout={this.props.onClickLogout} />
                    <img class="img-fluid logo_sidebar" src="http://itplus-academy.edu.vn/upload/b7ad33828b0773d8f301805541d453df/files/java/%E1%BA%A2nh/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt="icon"></img>
                    <Search onChange={this.onChange} inputText={this.state.inputText} />
                    <div class='option_sidebar d-flex justify-content-between'>
                        <p style={{ color: onlShow ? '#dda52d' : '' }} onClick={this.SelectChecker.bind(this, 'OnlineShow')}>
                            <b>Online Friends</b>
                        </p>
                        <p style={{ color: onlShow ? '' : '#dda52d' }} onClick={this.SelectChecker.bind(this, 'MessageShow')}>
                            <b>Recent Messages</b>
                        </p>
                    </div>

                    <FriendList className='' listFriend={this.state.fList} chooseItem={this.props.showChat} />
                </div>
            </div>
        );
    }
}

export default SideBar;