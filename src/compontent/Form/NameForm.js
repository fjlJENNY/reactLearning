import React, {Component} from 'react';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'',
            textareaValue:'',
            selectValue:'',
            checkboxValue:'',
            numberValue:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
        event.preventDefault()
    }
    handleSubmit(event){
        console.log('event : submit ',event)
    }

    handleTextareaChange(event){
        this.setState({
            textareaValue : event.target.value
        })
        event.preventDefault();
    }
    handleSelectChange(event){
        this.setState({
            selectValue : event.target.value
        })
        event.preventDefault();
    }
    handleCheckboxChange(event){
        this.setState({
            checkboxValue:event.target.name
        })
        event.preventDefault()
    }
    // TODO select 怎样 multiple
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：<input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>
                    文章：<textarea value={this.state.textareaValue} id="" cols="30" rows="10" onChange={this.handleTextareaChange}></textarea>
                </label>
                <label >
                    选择你喜欢的风味:
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">柠檬</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <label >
                    参与：
                    <input type="checkbox" name={"isGoing"} checked={this.state.checkboxValue} onChange={this.handleCheckboxChange}/>
                    <input type="checkbox" name={"isGoing"} checked={this.state.checkboxValue} onChange={this.handleCheckboxChange}/>
                    <input type="checkbox" name={"isGoing"} checked={this.state.checkboxValue} onChange={this.handleCheckboxChange}/>
                </label>
                <label >
                    来宾人数：
                    <input type="number" name={"numberOfGuests"} value={this.state.numberValue}/>
                </label>
                <input  type="submit" value={"提交"}/>
                <span>{`${this.state.value} -- ${this.state.selectValue} -- ${this.state.textareaValue} -- ${this.state.checkboxValue}`}</span>
            </form>
        );
    }
}

export default NameForm;