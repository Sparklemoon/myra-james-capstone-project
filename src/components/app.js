import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from  "react-router-dom";

import Home from "./home.js";
import About from "./about.js";
import Gallery from "./gallery.js";
import Contact from "./contact.js";

import CapstoneContainer from "./capstone-container.js"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
         <h1>Parker James Photography</h1>
         <CapstoneContainer/>
        
          <div className="navbar-routes">
            <Router>
              <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
              </div>
            </Router>
          </div>
        
      </div>
    );
  }
}
