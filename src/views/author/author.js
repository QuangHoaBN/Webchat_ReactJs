import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
        this.setState({isHiddenLogin: false});
        this.setState({isHiddenSignUp: true});
    }
    signUpClick(){
        this.setState({isHiddenSignUp: false});
        this.setState({isHiddenLogin: true});
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
                                    <p onClick={this.loginClick} className='login'>Login</p>
                                    <p onClick={this.signUpClick} className='signup'>Sign Up</p>
                                </div>

                                {this.state.isHiddenSignUp === false 
                                    ? 
                                <div className='no_show'>
                                    <div className='content'>
                                        <Login name ='email' onChange={this.onChange} value={this.state.username} hint='Example: email@example.com'/>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Sign Up'/>
                                    </div>
                                </div>
                                    : 
                                <div className='show'>
                                    <div className='content'>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Login'/>
                                        <p className='forgot_pass'>Forgot password</p>
                                    </div>
                                </div> 
                                }
                                {/* <div className='show'>
                                    <div className='content'>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Login'/>
                                        <p className='forgot_pass'>Forgot password</p>
                                    </div>
                                </div> */}
                                {/* <div className='no_show'>
                                    <div className='content'>
                                        <Login name ='email' onChange={this.onChange} value={this.state.username} hint='ex: email@example.com'/>
                                        <Login name ='username' onChange={this.onChange} value={this.state.username} hint='Please enter username'/>
                                        <Login password ='password' name='password' onChange={this.onChange} value={this.state.password} hint='Please enter password'/>
                                    </div>
                                    <div className='footer'>
                                        <Button name='Sign Up'/>
                                    </div>
                                </div> */}
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