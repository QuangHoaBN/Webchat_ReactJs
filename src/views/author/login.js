import React, { Component } from 'react';
import './author.css';

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cache: '',
//             value: ''
//         }
//     }
//     render() {
//         return (
//             <div>
//                <input value={this.props.value} onChange={(text) => this.props.onChange(text.target.value)} placeholder={this.props.hint}></input>
//             </div>
//         );
//     }
// }
function Login(props){
    return (
        <div className='user_pass'>
        <input type={props.password} value={props.value} onChange={(text) => props.onChange(text.target.value, props.name)} placeholder={props.hint}></input>
        </div>
    );
}

export default Login;