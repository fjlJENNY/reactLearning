import React ,{ Component }  from 'react';

import PropsDemo from "./PropsDemo";
import Clock from "./Clock";



function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'tom',
    lastName: 'a',
};

const element = (
    <h1>
        hello,{formatName(user)}
    </h1>
);


class JsxDemo extends Component{
    render(){
       // return <PropsDemo name="tom"></PropsDemo>;
        // return element;
       return <Clock ></Clock>
    }
}

export default JsxDemo;



// jsx 语法 class => className   tabindex => tabIndex



