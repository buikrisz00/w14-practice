import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super();
        this.state = {
            key1: "This is the default state of a Class component",
            key2: 0
        }
        /* this.bla = this.changeText.bind(this); */
    }

    changeText = () => {
        this.setState({
            key1: "Class component clicked"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeText}>{this.state.key1}</button>
                <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
            </div>
        );
    }
}

export default ButtonWithClass;