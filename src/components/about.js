import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='about-wrapper'>
                <div className="about-heading-wrapper">
                    <h3>About Parker James</h3>
                </div>
                <p>     "He is a cool guy that takes even cooler pictures. A hobby photographer who is passionate about
                    Florida's nature and wildlife. Parker Lives in central Florida with his wife and two sons."
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
        )};
    }