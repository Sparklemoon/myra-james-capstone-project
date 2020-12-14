import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Parker James Photography",
            currentTime: String(new Date())
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({currentTime: String(new Date())});
        }, 1000);
    }

    render() {
        const { pageTitle, currentTime } = this.state;

        return (
            <div className='home-wrapper'>
                <h1>{pageTitle}</h1>
                <div>{currentTime}</div>
            </div>
        )};
    }
