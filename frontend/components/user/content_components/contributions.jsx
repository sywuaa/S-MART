import React from 'react';

class Contributions extends React.Component {
  constructor(props){
    super(props);

  }

  handleClick(id) {
    return() => {
      this.props.props.history.push(`/campaigns/${id}`);
    };
  }

  render(){
    const {perks} = this.props.props.user;
    if( perks ){
      this.perkList = perks.map( (perk, index) => {
        return(
          <div key={index} onClick={this.handleClick(perk.contribution_campaign_id)} className='component-contribution-detail-container'>
            <div className='profile-con-id'>{perk.contribution_id}</div>
            <div className='profile-con-camp'>{perk.contribution_campaign_id}</div>
            <div className='profile-con-price'>${perk.contribution_amount}</div>
            <div className='profile-con-item'>{perk.item}</div>
          </div>
        );
      });
    }

    return (
      <div className='component-contribution-container'>
          <h2 className='component-contribution-message'>Don't worry, this tab and all its content is only visible to the user. </h2>
        <div className='component-contribution-detail-bar'>
          <span>ID</span>
          <span>Campaign ID</span>
          <span>Price</span>
          <span>Perk</span>
        </div>
        <div className='component-contributionList-container'>
          {this.perkList}
        </div>
      </div>
    );
  }
}

export default Contributions;
