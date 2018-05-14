import React from 'react';

class RewardTile extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      openModal: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(this.props.session !== null){
      this.props.getPerk(this.props.reward);
    }else {
      window.alert('please sign in');
    }
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
        <div className="est-delivery" onClick={this.props.getPerk(this.props.reward)}>
          Get This Perk
        </div>

      </div>
    );
  }



}

export default RewardTile;
