import React from 'react';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';

class Tile extends React.Component {
  constructor(props){
    super(props);
  }


  render(){

    const camp = this.props.camp;
    let percent = parseFloat(camp.contributions / camp.goal * 100).toFixed(2);
    let bar = (percent > 100) ? 100 : percent;
    return(

      <div className="tile-container">

        <img src={camp.square_image_url} />

        <div className="tile-info">
          <div className="tile-top">
            <span>
              {camp.title}<strong>:</strong>
            </span>

            <span className="tile-slogan">
              {camp.slogan}
            </span>

          </div>

          <div className="tile-bottom">
            <span className="tile-contribution">
              <span>${camp.contributions}</span> USD Raised
            </span>
            <Line className="percent-line" percent={bar} strokeWidth="5" strokeColor="#eb1478"/>

            <div className="tile-info-bottom">
              <span>
                {percent} %
              </span>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default Tile;
