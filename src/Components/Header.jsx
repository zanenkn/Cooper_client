import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { authenticate, register, logout } from '../Modules/Auth'
import { Button, Grid, Segment, Icon, Menu, Container, Form } from 'semantic-ui-react'


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
    let loginButton;
    let user;
    let signupButton;
    let userForm

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid
      signupButton = (
        <p>Hi {user}</p>
      )
      loginButton =(
        <Button color='teal' id="logout" onClick={this.onLogout.bind(this)}>Log out</Button>
      )
    } else {
      signupButton = (
        <>
          <Button 
            color='teal' 
            id="signup" 
            style={{ margin: '0.5em' }} 
            onClick={() => 
              this.setState({ renderSignupForm: true })
            }>
              Sign up
          </Button>
          <p>{this.state.message}</p>
        </>
      )

      loginButton = (
        <>
        <Button color='teal' id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</Button>          
        <p>{this.state.message}</p>
        </>
      )
    }

    if(this.state.renderLoginForm === true) {
      userForm = (
        <>
          <Form>
          <LoginForm 
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
          <Icon 
            link name="angle up" 
            color='teal' 
            size='big' 
            onClick={() => this.setState({ renderLoginForm: false })}
          />
          </Form>
        </>
      )
    }

    if(this.state.renderSignupForm === true) {
      userForm = (
        <>
            <SignupForm 
              signupHandler={this.onSignup.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
            <Icon 
              link name="angle up" 
              color='teal' 
              size='big' 
              onClick={() => this.setState({ renderSignupForm: false })}
            />
        </>
      )
    }


    return (
      <>
    
      <Segment inverted color='teal'>

        <Menu inverted secondary>
          <Menu.Item as='a'><NavLink activeStyle={{fontWeight: 'bold'}} to='/cooper'>Cooper Calculator</NavLink></Menu.Item>
          <Menu.Item as='a'><NavLink activeStyle={{fontWeight: 'bold'}} to='/bmi'>BMI</NavLink></Menu.Item>
          <Menu.Item as='a'><NavLink activeStyle={{fontWeight: 'bold'}} to='/history'>History</NavLink></Menu.Item>


          <Menu.Menu position='right'>
            <Menu.Item>{signupButton}</Menu.Item>
            <Menu.Item>{loginButton}</Menu.Item>
          </Menu.Menu>

        </Menu>

      </Segment>

      <Container>
        <Grid centered columns={2}>
          <Grid.Column>
          {userForm}
          </Grid.Column>
        </Grid>
      </Container>
    

  

      </>
    );
  }
};

export default Header