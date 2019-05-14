import React, { Component } from 'react';

class Page extends Component {
    render(){
        if(!this.props.warn){
            return null;
        }
        return (
            <div className="warning">
                Warning
            </div>
        )
    }
}

class WarningBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            showWarning : true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }
    handleToggleClick(){
        this.setState((prevState)=>{
            return {
                showWarning : !prevState.showWarning
            }
        })
    }
    render() {
        return (
            <div>
               <Page warn = {this.state.showWarning}></Page>
               <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
               </button>
            </div>
        );
    }
}

export default WarningBanner;