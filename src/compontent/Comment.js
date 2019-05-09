import React from 'react';
import Avatar from './Avatar'
import UserInfo from './UserInfo'
class Comment extends React.Component{
    render(){
        return (
            <div className="Comment">
                <UserInfo author={this.props.author}></UserInfo>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                     {this.formatDate(this.props.date)}
                </div>
            </div>
        )
    }
    formatDate(date) {
        return date.toLocaleDateString();
    }
}


export default Comment