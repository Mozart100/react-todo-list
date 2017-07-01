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


    handleSubmit(event) {
        event.preventDefault();
        console.log('submit button click');
    }

    render() {
        return (<div>
            <input type="text"
                placeholder="Type in your todo"
                value={this.state.inputText}
                onChange={this.handleChanged.bind(this)}>
            </input>

            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>);
    }
}

export default TodoInput;