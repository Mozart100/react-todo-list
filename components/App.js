import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';


class App extends Component {
    render() {
        return (
            <div>
                <div>Todo List.</div>
            <TodoInput />
                <TodoList todos={this.props.todos}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);




