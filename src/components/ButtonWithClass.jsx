import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super();
        this.state = {
            key1: "This is the default state of a Class component",
            key2: 0,
            title: {
                main: "main title",
                sub: "sub title"
            },
            countries: []
        }
        /* this.bla = this.changeText.bind(this); */
        console.log(1);
    }

    changeText = () => {
        this.setState({
            key1: "Class component clicked"
        })
    }

    componentDidMount() {
        console.log(3);
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(countries => {
            this.setState(
                () => {
                    return { countries }
                },
                () => console.log(this.state)
            )
        })
    }

    render() {
        console.log(2);
        return (
            <div>
                <button onClick={this.changeText}>{this.state.key1}</button>
                {/* <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button> */}
                {/* <button onClick={() => {
                    this.state.key2 = 1
                    console.log(this.state);
                }
            }>{this.state.key2}</button> */}
                {/* <button onClick={() => {
                    this.setState({
                        title: {
                            main: "h1", 
                            sub: "subsub"
                        }
                    })
                    console.log(this.state);
                }}>{this.state.title.main}</button> */}
                <button onClick={() => {
                    this.setState(
                        () => {
                            return {
                                title: {
                                    main: "h1",
                                    sub: "subsub"
                                }
                            }
                        },
                        () => {
                            console.log(this.state);
                        }
                    )
                }}>{this.state.title.main}</button>
                <div>
                    {this.state.countries.map((country, index) => <div className="countries" key={index}>{country.name.common}</div>)}
                </div>
            </div>
        );
    }
}

export default ButtonWithClass;