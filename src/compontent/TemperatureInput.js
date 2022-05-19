import React, {Component} from 'react';
import BoilingVerdict from "./Calculator";


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};



// Celsius 摄氏度   Fahrenheit 华氏温度计
class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature:''};
    }
    handleChange(e){
        console.log(typeof e.target.value);
        // this.setState({
        //     temperature:e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)

    }
    render() {
        // 状态上移，放在父组件
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入温度{scaleNames[scale] === 'Celsius' ? '(摄氏度)' : '(华氏温度计)'}</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
                {/*<BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>*/}
            </fieldset>
        );
    }
}

export default TemperatureInput;