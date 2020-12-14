import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./home.js";
import About from "./about.js";
import Gallery from "./gallery.js";
import Contact from "./contact.js";

function PageContent() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default PageContent;