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
        this.dynamicTime = setInterval(() => {
            console.log('This is the way')
            this.setState({currentTime: String(new Date())});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.dynamicTime);
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
