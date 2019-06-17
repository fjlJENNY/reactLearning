import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function toConvert (temperature , convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}



class Calculator extends Component {
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature:'',scale:'c'};
    }
    // handleChange(e){
    //     console.log(typeof e.target.value);
    //     this.setState({
    //         temperature:e.target.value
    //     })
    // }
    handleCelsiusChange(temperature){
        this.setState({
            scale:'c',
            temperature
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature
        })
    }
    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        // 取巧
        const celsius = scale === 'f' ? toConvert(temperature , toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? toConvert(temperature , toFahrenheit ) : temperature;
        return (
            <div>
                {/*<fieldset>*/}
                {/*<legend>输入温度（摄氏度）</legend>*/}
                {/*<input type="text" value={temperature} onChange={this.handleChange}/>*/}

                {/*</fieldset>*/}
                <TemperatureInput scale={'c'} onTemperatureChange={this.handleCelsiusChange} temperature={celsius} ></TemperatureInput>
                <TemperatureInput scale={'f'} onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}></TemperatureInput>
                <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
            </div>
        );
    }
}

export default Calculator;