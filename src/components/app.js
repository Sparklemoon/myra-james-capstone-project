import React, { Component } from 'react';

import Navbar from './navbar.js';
import PageContent from "./page-content.js";
import CapstoneContainer from "./capstone-container.js";




export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <PageContent />
        <CapstoneContainer/>
      </div>
    );
  }
}
