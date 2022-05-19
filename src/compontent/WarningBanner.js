import React , { Component } from 'react';

class Page extends  Component{
    render() {
        if(!this.props.warn){
            return null
        }
        return (
            <div class="warning">
                warning
            </div>
        )
    }
}

class WarningBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            showWarning:true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState((state)=>({
            showWarning: !state.showWarning
        }));
    }
    render(){
        return (
            <div>
                <Page warn={this.state.showWarning}></Page>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏':'显示'}
                </button>
            </div>
        )
    }
}


export default WarningBanner;



