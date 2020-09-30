import React , { Component }  from 'react';

class ListDemo extends Component{

    constructor(props){
        super(props);

    }


    numbers = [1,2,3,4,5];


    render(){
        return (
        <ul>
            {this.numbers.map((item)=>{
                return (<li key={item}>{item}</li>);
            })}
        </ul>
        );
    }
}

export default ListDemo;