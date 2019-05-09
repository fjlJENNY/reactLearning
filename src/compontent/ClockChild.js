import React from 'react'

class ClockChild extends React.Component{
    render(){
        return (
            <h2>It is {this.props.date.toLocaleTimeString()}</h2>
        )
    }
}

export default ClockChild