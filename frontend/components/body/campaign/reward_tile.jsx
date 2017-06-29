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

        <div className="reward-title">
          {this.props.reward.title}
        </div>
        <div className="reward-description">
          {this.props.reward.description}
        </div>

        <div className="reward-item">
          Items included:
          {this.props.reward.items}
        </div>


        <div className="est-delivery">
          <span>Estimated Delivery {this.props.end_date}</span>
        </div>


      </div>
    );
  }



}

export default RewardTile;
