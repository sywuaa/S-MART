import React from 'react';
import { Link } from 'react-router-dom';

class CenterCaro extends React.Component{

  constructor(props){
    super(props);

  }

  render(){

    if (this.props.campaign){
      this.img = (<img key={this.props.campaign.id} src={this.props.campaign.carousel_image} />);
    }else {
      this.img = "No Image";
    }

    return(
      <div className="center-caro" >
        <div className="center-caro_image_url">
          {this.img}
        </div>
      </div>
    );
  }

}

export default CenterCaro;
