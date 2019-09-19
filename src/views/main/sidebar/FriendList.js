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
        return(
            this.state.fList.map((value, index) => (
                <div class = "fItem">
                    <img class = "img-fluid fAvatar" src = {value.imgUrl} alt = {value.fName} />
                    <p class = "fName">{value.fName}</p>
                </div>
            ))
        )
    }
}