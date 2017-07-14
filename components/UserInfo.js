import React, { Component } from 'react';


class UserInfo extends Component {

    handleNewId() {
        this.props.actions.createNewUserId();
    }


    createNewUserIfId0add() {
        
this.props.actions.createNewUserIfId0add();
    }

    render() {
        return (
            <div>
                <div>userName: {this.props.user.username}</div>
                <div>id: {this.props.user.id}</div>
                <button onClick={this.handleNewId.bind(this)} >Update with random id.</button>
                <button onClick={this.createNewUserIfId0add.bind(this)} >Update only if odd.</button>
            </div>
        )
    }
}

export default UserInfo;




