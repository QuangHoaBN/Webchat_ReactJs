import React, { Component } from 'react';
import '../../bootstrap.min.css';
import './author.css';
import logo from './logo.png';
import Login from './login.js';
import Button from './login_signup_click.js'

class Login_SignUp extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            isHiddenLogin: true,
            isHiddenSignUp: true
        }
        this.onChange=this.onChange.bind(this);
        this.loginClick=this.loginClick.bind(this);
        this.signUpClick=this.signUpClick.bind(this);
    }

    onChange(evt, filter){
        this.setState({[filter]: evt})
    }
    loginClick(){
        this.setState({isHiddenLogin: !this.setState.isHiddenLogin});
    }
    signUpClick(){
        this.setState({isHiddenSignUp: !this.setState.isHiddenSignUp});
    }

    render() {
        return (
            <div className='author-wrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3'></div>
                        <div className='col-xl-6'>
                            <div className='author'>
                                <div className='logo d-flex justify-content-center'>
                                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                                    <img src={logo}></img>
                                </div>
                                <div className='title d-flex justify-content-center'>
                                    <a href='#login' onClick={this.loginClick} className='login align-items-center'>Login</a>
                                    <a href='#signup' onClick={this.signUpClick} className='signup align-items-center'>Sign Up</a>
                                </div>
                                {}
                                {/* <div className='show'>
                                    <div className='content'>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Login'/>
                                        <p className='forgot_pass'>Forgot password</p>
                                    </div>
                                </div>
                                <div className='no_show'>
                                    <div className='content'>
                                        <Login name ='email' onChange={this.onChange} value={this.state.username} hint='ex: email@example.com'/>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Sign Up'/>
                                    </div>
                                </div> */}
                                <p>{this.state.isHiddenLogin}</p>
                            </div>
                        </div>
                        <div className='col-xl-3'></div>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Login_SignUp;