import React, { Component } from 'react';
// import JsxDemo from "./JsxDemo";

import EventDemo from "./EventDemo";
import LoginControl from "./LoginControl";
import ListDemo from "./ListDemo";
import FormDemo from "./FormDemo";

class Layout extends Component {
    render(){
        return (
            <div>
                <EventDemo></EventDemo>
                <LoginControl></LoginControl>
                <ListDemo></ListDemo>
                <FormDemo></FormDemo>
            </div>
        );
        
    }
}

export default Layout;