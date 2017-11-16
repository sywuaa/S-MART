import React from 'react';
import { Component } from 'react-redux';
import Tile from './tiles';
import { Link } from 'react-router-dom';
import Caro from './carousel/caro_container';
import TileCaro from './tile_carousel/tile_caro';

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
        <div className="carousel">
        <Caro />
        </div>
        <TileCaro tiles={this.tileList} />
        <div className="tiles-container">
          {this.tileList}
        </div>
      </div>
    )
  }


}

export default IndexPage;
