import React , { Component }  from 'react';

class Toggle extends Component{

    constructor(props){
        super(props);

        this.state = {
            isToggleOn : true
        };

        this.handleClick = this.handleClick.bind(this); // 绑定一次
    }

    handleClick(){
        this.setState(state=>{
            return {
                isToggleOn : !state.isToggleOn
            };
        })
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                { this.state.isToggleOn ? "开" : "关"}
            </button>
        );
    }
}

export default Toggle;