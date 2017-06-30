import React, { Component } from 'react';

class TextDisplay extends Component {
    constructor() {
        super();
    }

    handleClick () {
        this.props.deleteLetter();
    }

    render() {
        return (
            <div>
                <div> I am displaying text. {this.props.text}</div>
                <button onClick={this.handleClick.bind(this)}>Delete solely one letter.</button>
            </div>
        );
    }
}

export default TextDisplay;