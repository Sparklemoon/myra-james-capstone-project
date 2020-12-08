import React, { Component } from 'react';

import Home from "./home.js";
import About from "./about.js";
import Gallery from "./gallery.js";
import Contact from "./contact.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Parker James Photography</h1>
        <div className="navbar-wrapper">
          <Home />
          <About />
          <Gallery />
          <Contact />
        </div>
      </div>
    );
  }
}
