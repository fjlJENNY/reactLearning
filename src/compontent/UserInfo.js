import React from 'react'
import Avatar from './Avatar'
class UserInfo extends React.Component{
    render(){
        return (
            <div className="UserInfo">
                <Avatar user={this.props.author}></Avatar>
                <div className="UserInfo-name" >
                    {this.props.author.name}
                </div>
            </div>
        )
    }
}

export default UserInfo