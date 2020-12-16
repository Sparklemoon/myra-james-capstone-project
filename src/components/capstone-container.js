import React, { Component } from "react";

import CapstoneItem from "./capstone-item.js"

export default class CapstoneContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "An exploration of Florida wildlife and landscapes",
            data: [
                {title: "Alligator"},
                {title: "Bird"},
                {title: "Tree"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }

    capstoneItems() {
        return this.state.data.map(item => {
            return <CapstoneItem title={item.title} url={"hisinstagramlink.com"} />;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Florida wildlife is beautiful"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.capstoneItems()}

                <hr/>
                <button onCLick={this.handlePageTitleUpdate}>wildlife</button>
            </div>
        );
    }
}