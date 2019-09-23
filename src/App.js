import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './views/main/Homepage';
import Authen from './views/author/author';
import {
  BrowserRouter as Router, 
  Route, 
  Redirect
} from 'react-router-dom';

// function App() {
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <Homepage />
    // <Authen />
  // );
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated : true
    }
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  Login() {
    this.setState({
      isAuthenticated : true
    })
  }

  Logout() {
    this.setState({
      isAuthenticated : false
    })
  }

  render() {
    console.log(this.state.isAuthenticated);
    let isAuthen = this.state.isAuthenticated;
    let routerLink = () => 
      isAuthen ?
        (<Router>
          <Route exact path = "/" Component = {HomepageShow}/>
        </Router>) : 
        (<Router>
          <Route path = "/login" Component = {AuthenShow}/>
        </Router>)

    return (
      <Router>
        <Route path = "/" render={() => (this.state.isAuthenticated ? <Redirect to="/"/> : <Redirect to="/login"/>)}/>
        <Route path = "/login" component = {AuthenShow}/>
        <Route exact path = "/" component = {HomepageShow}/>
      </Router>
    );
  }
}

function HomepageShow(){
  return <Homepage />
}

function AuthenShow(){
  return <Authen />
}

export default App;
