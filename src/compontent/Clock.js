import React from 'react';
import ClockChild from './ClockChild'
// TODO -- Clock 组件 不能渲染 该组件每秒钟刷新 ，就是失效
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            count : 1,
            clockVersion:'0.0.1'
        }
    }
    // 组件 加载到 DOM 
    componentDidMount(){
        this.timerID = setInterval(
            ()=>{
                this.tick()
            },1000)
    }
    // dom 被移除
    componentWillUnmount(){
        this.timerID && clearInterval(this.timerID)
    }
    tick(){
        // this.setState({
        //     date:new Date()
        // })
        this.setState((prevState,props)=>{
            return {
                //date:new Date(),
                date:new Date(prevState.date.getTime() + 1000),
                count : prevState.count + props.increment,
                clockVersion : this.setVersion(prevState)
            }
        })
    }
    setVersion(prevState){
        let state = prevState.clockVersion.split('.').slice();
        state[state.length-1] = Math.floor(Math.random() * 10 ) + Number(state[state.length-1] )
        if(state[state.length - 1] >= Number.MAX_SAFE_INTEGER){
            state[state.length -1 ] = 0;
        }
        return state.join('.')
    }
    render(){
        return (
            <div >
                {/* <h2>It is {this.props.date.toLocaleTimeString()}</h2> */}
                {/* <h2>It is {this.state.date.toLocaleTimeString()}</h2> */}
                <ClockChild date={this.state.date}></ClockChild>
                <h3>{this.state.count}</h3>
                <p>{this.state.clockVersion}</p>
            </div>
        )
    }
}

export default Clock