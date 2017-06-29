import React from 'react';
import { Line } from 'rc-progress';

class Tile extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    const camp = this.props.camp;
    let percent = parseFloat(camp.contributions / camp.goal).toFixed(2);

    return(

      <div className="tile-container">

        <img src={camp.square_image_url} />

        <div className="tile-info">
          <span>
            {camp.title}<strong>:</strong>
          </span>

          <span className="tile-slogan">
            {camp.slogan}
          </span>

          <span>
            {camp.overview}
          </span>

          <span className="tile-contribution">
            <span>${camp.contributions}</span> USD Raised
          </span>

          <Line className="percent-line" percent={percent} strokeWidth="5" strokeColor="#eb1478 " />

          <div className="tile-info-bottom">
            <span>
              {percent} %
            </span>

            <span>
              End: {camp.s_date}
            </span>
          </div>

        </div>

      </div>

    );
  }
}

export default Tile;
