import React from 'react';
import { Component } from 'react-redux';
import Tile from './tiles';
import Carousel from './carousel_container';
import { Link } from 'react-router-dom';
// import Slides from './carousel';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllCampaigns();
  }

  handleClick(id) {
    return () => {
      this.props.history.push(`/campaigns/${id}`);
    };
  }

  render () {
    if(this.props.campaigns){
      this.tileList = this.props.campaigns.map( (campaign,index) => {
        return(
          <Link key={index} to={`/campaigns/${campaign.id}`}>
              <Tile camp={campaign} />
          </Link>
        );

      });
    }


    return(
      <div className="index-page">
        <div className="tiles-container">
          {this.tileList}
        </div>
      </div>
    )
  }


}

export default IndexPage;

// <Carousel />

  // <div  onClick={this.handleClick(campaign.id)} className="tile">
  //     <Tile camp={campaign} />
  // </div>
