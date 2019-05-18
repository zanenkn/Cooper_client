import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { authenticate, register, logout } from '../Modules/Auth'


class Header extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      renderSignupForm: false,
      password_confirmaton: ''
    }
  }
  
  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }
  
  async onLogin(e) {
    e.preventDefault()
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true })
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  async onSignup(e) {
    e.preventDefault();
    let resp = await register(this.state.email, this.state.password, this.state.password_confirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      debugger
      this.setState({ message: resp.message, renderSignupForm: false })
    }
  }

  async onLogout(e) {
    e.preventDefault();
    let resp = await logout()
    if (resp.authenticated === false) {
      this.setState({ authenticated: false });
    } else {
      this.setState({ message: resp.message })
    }
  }

  render() {
    let renderLogin;
    let user;
    let renderSignup;
    let renderLogout

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid
      renderLogin = (
        <p>Hi {user}</p>
      )
      renderLogout =(
        <>
        <button id="logout" onClick={this.onLogout.bind(this)}>Log out</button>
        </>
      )

    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm 
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" onClick={() => this.setState({ renderLoginForm: true})}>Login</button>
            <p>{this.state.message}</p>
          </>
        )
      }

      if (this.state.renderSignupForm === true) {
        renderSignup = (
          <>
            <SignupForm 
              signupHandler={this.onSignup.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderSignup = (
          <>
            <button id="signup" onClick={() => this.setState({ renderSignupForm: true})}>Sign up</button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }

    return (
      <>
        <ul>
          <li><NavLink activeStyle={{fontWeight: 'bold'}} to='/cooper'>Cooper Calculator</NavLink></li>
          <li><NavLink activeStyle={{fontWeight: 'bold'}} to='/history'>History</NavLink></li>   
        </ul>
    
        {renderLogin}
        {renderSignup}
        {renderLogout}
      </>
    );
  }
};

export default Header