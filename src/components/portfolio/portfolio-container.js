import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";


export default class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome Welcome",
      data: [
          {title: "Skaled Sandbox"}, 
          {title: "Quip"},
          {title: "Google"},
          {title: "Apple"}
        ]
    };
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} />;
    })
  }

  render() {
    return (
      <div>
          <h2>{this.state.pageTitle}</h2>
          
          {this.portfolioItems()}
          
      </div>
    );
  }
}
