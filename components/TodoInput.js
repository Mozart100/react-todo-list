import React, { Component } from 'react';

class TodoInput extends Component {
    constructor() {
        super();
        this.state = { inputText: '' };
    }

    handleChanged(event) {
        // console.log(event.target.value);
        this.setState({ inputText: event.target.value });
    }

    render() {
        return (<div>
            <input type="text"
                placeholder="Type in your todo"
                value={this.state.inputText}
                onChange={this.handleChanged.bind(this)}>
            </input>

            <button>Submit</button>
        </div>);
    }
}

export default TodoInput;