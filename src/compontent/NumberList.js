import React, { Component } from 'react';

class NumberList extends Component {
    render() {
        const numbers = [1,2,3,4];
        const listItems = numbers.map((item,index) => {
            return (
                <li key={index}>{item*2}</li>
            )
        });
        console.log(listItems)
    
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default NumberList;