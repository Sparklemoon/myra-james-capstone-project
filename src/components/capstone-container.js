import React, { Component } from "react";

import CapstoneItem from "./capstone-item.js"

export default class CapstoneContainer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h2>stuff here</h2>
                <CapstoneItem/>
            </div>
        );
    }
}