import React from 'react'
import Greeting from './Greeting'
import LoginControl from './LoginControl'

class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log('handle click ' ,this)
        this.setState((prevState)=>{
            return {
                isToggleOn : !prevState.isToggleOn
            }
        })
    }
    render(){
        return (
            <div>
                {/* <Greeting isLoggedIn={false}></Greeting> */}
                <LoginControl></LoginControl>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON': 'OFF'}
                </button>
            </div>
        )
    }
}

export default ToggleButton