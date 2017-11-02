import React from 'react';
import { Link } from 'react-router-dom';

class CenterCaro extends React.Component{

  constructor(props){
    super(props);

  }

  render(){
    const { campaign } = this.props;

    if (campaign){
      this.imgUrl = campaign.carousel_image;
    }else {
      this.imgUrl = "No Image";
    }

    return(
      <div className="center-caro" >
        <div className="center-caro_image_url">
          <img src={this.imgUrl} />
        </div>
      </div>
    );
  }

}

export default CenterCaro;
