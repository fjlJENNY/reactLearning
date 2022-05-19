import React, { Component } from 'react';

class FormReact extends Component {
    constructor(props){
        super(props);
        this.state = {value : '',selectValue:'',isGoing : true}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }
    handleSubmit(e){
        alert('A name was submitted: ' + this.state.value + ' ' + this.state.selectValue)
        e.preventDefault();

    }
    handleChange(e){
        
        this.setState({
            value:e.target.value
        })
        
    }
    handleSelectChange(e){
        console.log(e.target.value)
        this.setState({
            selectValue:e.target.value
        })
    }
    handleCheckboxChange(e){
        const target = e.target;
        console.log(target.name);
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange = {this.handleChange}/>
                </label>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <label>
                    Is going
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleCheckboxChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default FormReact;