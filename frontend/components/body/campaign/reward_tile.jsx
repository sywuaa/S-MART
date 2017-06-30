import React from 'react';

class RewardTile extends React.Component {
  constructor(props){
    super(props);


  }


  render(){
    return(
      <div className="reward-inside-container">
        <div className="reward-price">
          <strong>$ {this.props.reward.price}</strong> USD + Shipping
        </div>

        <div className="show-reward-title">
          {this.props.reward.title}
        </div>
        <div className="show-reward-description">
          {this.props.reward.description}
        </div>

        <div className="show-reward-item">
          <strong>Items included:</strong>
          {this.props.reward.item}
        </div>


        <div className="est-delivery">
          <span> Get This Perk {this.props.end_date}</span>
        </div>


      </div>
    );
  }



}

export default RewardTile;
