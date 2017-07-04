import React, { Component } from 'react';
import actions from '../redux/actions';

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

        this.props.dispatch(actions.addTodo(this.state.inputText))
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit.bind(this)} >
                <input type="text"
                    placeholder="Type in your todo"
                    value={this.state.inputText}
                    onChange={this.handleChanged.bind(this)}>
                </input>

                <input type="submit" text="Submit" />
            </form>
        </div>
        );
    }
}

export default TodoInput;