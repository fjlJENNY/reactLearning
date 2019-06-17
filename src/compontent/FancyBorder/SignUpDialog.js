import React, {Component} from 'react';
import FancyBorder from './FancyBorder'

class Dialog extends  Component{
    render(){
        return (
            <FancyBorder color={'blue'}>
                <h1 className={'Dialog-title'}>
                    {this.props.title}
                </h1>
                <p className={'Dialog-message'}>
                    {this.props.message}
                </p>
                {this.props.children}
            </FancyBorder>
        )
    }
}


class SignUpDialog extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login:''}
    }
    handleChange(e){
        this.setState({
            login:e.target.value
        })
    }
    handleSignUp(){
        console.log(`welcom aboard , ${this.state.login}`)
    }
    render() {
        return (
            <Dialog title={'Mars Explration Program'} message={"How should we refer to you?"}>
                <input type="text" value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>sign up</button>
            </Dialog>
        );
    }
}

export default SignUpDialog;