import React from 'react';
import { Link } from 'react-router-dom';

class CenterCaro extends React.Component{

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.history.push(`/campaigns/${id}`);
  }

  render(){

    if (this.props.campaign){
      this.img = (<img key={this.props.campaign.id} src={this.props.campaign.carousel_image}>
        </img> );
    }else {
      this.img = "No Image";
    }

    return(
      <div className="center-caro" >
        <div className="center-caro_image_url">
          {this.img}
          <span className="carousel-span">View Campaign</span>
        </div>
      </div>
    );
  }

}

export default CenterCaro;
