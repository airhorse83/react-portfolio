import React, { Component } from 'react';
import axios from "axios";

import PortfolioItem from "./portfolio-item";


export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome Welcome",
      isLoading: false,
      data: []
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

  getPortfolioItems() {
    axios
      .get('https://tylerhorsley.devcamp.space/portfolio/portfolio_items')
      .then(response =>  {
       console.log(response);
       this.setState({
         data: response.data.portfolio_items
       });
    })
    .catch(error => {
      console.log(error);
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.name} description={item.description} url={item.url} slug={item.id} />;
    });
  }

  
  componentDidMount() {
    this.getPortfolioItems();
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
