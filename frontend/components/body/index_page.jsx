import React from 'react';
import { Component } from 'react-redux';
import Tile from './tiles';
import { Link } from 'react-router-dom';
import Caro from './caro/new_caro_container';
import TileCaro from './tile_carousel/tile_caro';
import Carousel from 'nuka-carousel';

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

    this.first4 = this.tileList.slice(0,4);
    this.last4 = this.tileList.slice(4)

    this.tileCarousel = [[this.first4],[this.last4]].map( (arrayOf4, index) => {
      return(
        <div className='tileCarouselContainer' key={index}>
          {arrayOf4}
        </div>
      );
    });

    return(
      <div className="index-page">
        <div className="newCaro">
          <Caro />
        </div>

        <Carousel className='tileCarousel' renderBottomCenterControls={false} wrapAround={true} autoplayInterval={6000} autoplay>
          {this.tileCarousel}
        </Carousel>
      </div>
    )
  }


}

export default IndexPage;
