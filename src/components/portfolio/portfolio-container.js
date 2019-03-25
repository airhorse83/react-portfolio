import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome Welcome",
      isLoading: false,
      data: [
          {title: "SkaledSandbox", category: "Education", slug:"skaledsandbox" }, 
          {title: "Quip", category: "eCommerce", slug: "quip" },
          {title: "Google", category: "Media", slug: "google" },
          {title: "Apple", category: "Media", slug: "apple" }
        ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }


  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} slug={item.slug} />;
    })
  }

  

  render() {
    if (this.state.isLoading) {
      return <div>loading...</div>
    }

    return (
      <div>
          <h2>{this.state.pageTitle}</h2>

          <button onClick={() => this.handleFilter("Media")}>Media</button>
          <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
          <button onClick={() => this.handleFilter("Education")}>Education</button>
          
          {this.portfolioItems()}
          
      </div>
    );
  }
}
