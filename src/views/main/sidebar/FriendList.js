import React from 'react'
import './sidebar.css'
import { id } from 'postcss-selector-parser';

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fList : []
        }
    }

    componentWillMount(){

    }

    componentDidMount(){
        console.log(this.props.listFriend);
        this.setState (() => {
            return{
                fList:[this.props.listFriend]
            }
        })
        
    }

    render() {
        console.log(this.state.fList);
        return (
                this.props.listFriend.map((value, index) => (
                <div class = "fItem_sidebar" onClick={() => this.props.chooseItem(value.fName, value.imgUrl)}>
                    <img class = "img-fluid fAvatar_sidebar" src = {value.imgUrl} alt = {value.fName} />
                    <p class = "fName_sidebar">{value.fName}</p>
                </div>
            ))
        )
    }
}