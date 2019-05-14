import React, { Component } from 'react';
import Greeting from './Greeting';


class LoginButton extends Component {
    render() {
       return (
           <button onClick={this.props.onClick}>Login</button>
       )
    }
}
class LogoutButton extends Component {
    render() {
       return (
           <button onClick={this.props.onClick}>Logout</button>
       )
    }
}

class LoginControl extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            isLoggedIn:false
        }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    handleLogin(){
        this.setState({
            isLoggedIn : true
        })
    }
    handleLogout(){
        this.setState({
            isLoggedIn : false
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;

        // if(!isLoggedIn){
        //     button = <LoginButton onClick={this.handleLogin}></LoginButton>
        // }else{
        //     button = <LogoutButton onClick={this.handleLogout}></LogoutButton>
        // }


        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {/* {button} */}

                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogout}></LogoutButton>
                ) : (
                    <LoginButton onClick={this.handleLogin}></LoginButton>
                )}
            </div>
        );
    }
}

export default LoginControl;