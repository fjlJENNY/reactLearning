import React from 'react'

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
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        )
    }
}

export default ToggleButton