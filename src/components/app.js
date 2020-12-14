import React, { Component } from 'react';

import Navbar from './navbar.js';
import PageContent from "./page-content.js";




export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
         <h1>Parker James Photography</h1>
        <Navbar />
        <PageContent />
      </div>
    );
  }
}
