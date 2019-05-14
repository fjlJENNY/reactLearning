import React, { Component } from 'react';


class UserGreeting extends Component{
    render(){
        return (
            <h1>Welcome backs.</h1>
        )
    }
}

class GuestGreeting extends Component{
    render(){
        return (
            <h1>Please sign up.</h1>
        )
    }
}

class Greeting extends Component {
    render() {
        let isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            return (
                <UserGreeting></UserGreeting>
            )
        }else{
            return (
               <GuestGreeting></GuestGreeting> 
            )
        }
    }
}

export default Greeting;