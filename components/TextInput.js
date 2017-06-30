import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {
    constructor()
    // constructor(props,context)
    {
        super();
        // super(props,context);
        this.state = { inputText: 'initial text' };
    }

    deleteLetter() {
        const text = this.state.inputText;
        this.setState(
            { inputText: text.substring(0,text.length -1) }
        );
    }

    handleChanged(event) {
        // console.log(event.target.value);
        this.setState({ inputText: event.target.value });
    }

    render() {
        return (<div>
            <input type="text"
                placeholder="This is text"
                value={this.state.inputText}
                onChange={this.handleChanged.bind(this)}>
            </input>

            <TextDisplay text={this.state.inputText} deleteLetter = {this.deleteLetter.bind(this)}/>
        </div>);
    }
}

export default TextInput;