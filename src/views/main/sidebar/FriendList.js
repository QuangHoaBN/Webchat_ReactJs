import React from 'react'
import './sidebar.css'

export default class FriendList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fList : []
        }
    }

    componentWillMount(){

    }

    componentWillMount(){
        console.log(this.props.listFriend);
        this.setState (() => {
            return{
                fList:[this.props.listFriend]
            }
        })
        
    }

    render() {
        console.log(this.props.listFriend);
        return(
                this.props.listFriend.map((value, index) => (
                <div class = "fItem_sidebar">
                    <img class = "img-fluid fAvatar_sidebar" src = {value.imgUrl} alt = {value.fName} />
                    <p class = "fName_sidebar">{value.fName}</p>
                </div>
                ))
        )
    }
}