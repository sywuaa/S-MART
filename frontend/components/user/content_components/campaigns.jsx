import React from 'react';
import { selectAllCampaigns } from '../../../reducers/selectors';

class Campaigns extends React.Component {
  constructor(props){
    super(props);

  }

  handleClick(id) {
    return() => {
      this.props.history.push(`/campaigns/${id}`);
    };
  }

  render(){
    const {campaigns} = this.props.user;
    if( campaigns ){
      this.campaignList = campaigns.map( (camp, index) => {
        return(
          <div key={index} className='component-campaign-detail-container' >
            <div className='component-campaign-pic-container' onClick={this.handleClick(camp.id)}>
              <img src={camp.square_image_url} />
            </div>
            <div className='component-campaign-info-container'>
              <div className="component-campaign-title">{camp.title}</div>
              <div className='component-campaign-slogan'>{camp.slogan}</div>
              <div className='component-campaign-id'><span>Campaign ID: </span>{camp.id}</div>
            </div>
          </div>
        );
      });
    }

    return (
      <div className='component-campaigns-container'>
          <h2>My Campaign(s)</h2>
        <div className='component-campaignList-container'>
          {this.campaignList}
        </div>
      </div>
    );
  }

}

export default Campaigns;
