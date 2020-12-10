import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from  "react-router-dom";

import Home from "./home.js";
import About from "./about.js";
import Gallery from "./gallery.js";
import Contact from "./contact.js";


export default class App extends Component {
  render() {
    return (
      <div className='app'>

          <header>
            <h1>Parker James Photography</h1>
            <Link to="/">Home</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </header>
        
          <div className="navbar-routes">
            <BrowserRouter>
              <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
              </div>
            </BrowserRouter>
          </div>
        
      </div>
    );
  }
}
