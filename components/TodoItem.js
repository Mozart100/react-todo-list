import React, { Component } from 'react';

class TodoItem extends Component {

    handleComplete() {

    }


    handleDete() {

    }

    render() {

        return (
            <li>
                <div>{this.props.todo.text}</div>
                <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
                <button onClick={this.handleDete.bind(this)}>Mark as Deleted</button>
            </li>
        );
    }
}

export default TodoItem;