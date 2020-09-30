import React , { Component }  from 'react';

class FormDemo extends Component{

    constructor(props){
        super(props);
        this.state = {
            value:"",selectValue:"" ,
        checked:false,
        numberVal:""

    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({value:event.target.value});
    }

    handleSelectChange(event){
        this.setState({
            selectValue:event.target.value,
        });
    }

    handleSubmit(event){
        console.log("提交的名字：  ",this.state.value);
        console.log("水果：" ,this.state.selectValue);
         console.log("人数" , this.state.numberVal);
        event.preventDefault();
    }

    handleInput(event){
        const target = event.target;
        const value = target.type == "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
    

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>

                <label>
                    选择你喜欢的风味：
                    <select onChange={this.handleSelectChange} value={this.state.selectValue}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>

                <label>
                    参与：
                    {/* <input type="checkbox" checked={this.state.checked} name="checked" onChange={this.handleInput}></input> */}

                    <input type="input" value={this.state.numberVal}></input>
                </label>
                <label>
                    来宾人数：
                    <input type="number" value={this.state.numberVal} name="numberVal" onChange={this.handleInput}></input>
                </label>
                <input type="submit" value="提交"></input>
            </form>
        );
    }
}

export default FormDemo;