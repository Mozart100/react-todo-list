import React, { Component } from 'react';


class UserInfo extends Component {

    handleNewId()
    {
        this.props.createNewUserId();
    }


    render() {
        return (
            <div>
                <div>userName: {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)} >Update with random id.</button>
            </div>
        )
    }
}

export default UserInfo;




