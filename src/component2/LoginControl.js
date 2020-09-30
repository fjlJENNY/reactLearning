import React , { Component }  from 'react';

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:true,
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn:false,
        });
    }
    
    handleLogoutClick(){
        this.setState({
            isLoggedIn:true,
        });
    }


    render(){
        if(this.state.isLoggedIn){
            return <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }else{
            return <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        }
    }
}




class LoginButton extends Component{
    render(){
        return (
            <button onClick={this.props.onClick}> 登录 </button>
        );
    }
}


class LogoutButton extends Component{
    render(){
        return (
            <button onClick={this.props.onClick}> 登出 </button>
        );
    }
}



export default LoginControl;