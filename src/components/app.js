import React, { Component } from 'react';
import moment from "moment";
import Portfolio from "./portfolio/portfolio-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Tyler Horsley's Porfolio</h1>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}<Portfolio />
          
          
        </div>
        
      </div>
    );
  }
}
