import React from 'react';
import { Line } from 'rc-progress';

class Tile extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    const camp = this.props.camp;
    return(

      <div className="tile-container">

        <img src={camp.square_image_url} />

        <div className="tile-info">
          <span>
            {camp.title}<strong>:</strong>
          </span>

          <span>
            {camp.slogan}
          </span>

          <span>
            {camp.overview}
          </span>

          <Line className="percent-line" percent="60" strokeWidth="2" strokeColor="#2BDE73 " />
        </div>

      </div>

    );
  }
}

export default Tile;
