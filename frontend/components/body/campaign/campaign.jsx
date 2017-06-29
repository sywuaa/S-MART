import React from 'react';
import { merge } from 'lodash';
import { Component } from 'react-redux';
import { Player } from 'video-react';
import { Line } from 'rc-progress';
import RewardTile from './reward_tile';


class Campaign extends React.Component {
  constructor(props){
    super(props);

    this.makeContribution = this.makeContribution.bind(this);
  }

  componentDidMount(){
    this.props.fetchCampaign(this.props.id);
  }

  componentWillReceiveProps(newProps){
    if(!this.props.campaign || parseInt(newProps.match.params.id) !== this.props.campaign.id){
      this.props.fetchCampaign(newProps.match.params.id);
    }
  }

  makeContribution(){
    const contribution = {
      campaign_id: this.props.campaign.id,
      amount: 100000
    };

    this.props.createContribution(contribution);
  }

  render() {
    const { campaign } = this.props;

    if(campaign && this.props.currentCampaign === parseInt(this.props.id)){
      let percent = parseFloat(campaign.contributions / campaign.goal).toFixed(2);


      const rewardList = campaign.rewards.map( (reward,index) => {
        return(
          <div className="reward-container" key={index}>
            <RewardTile reward={reward} />
          </div>
        );
      });


      return(
        <div className="body">
          <div className="camp-show-page">
            <div className="camp-show-top-block">

              <div className="camp-show-top">

                <div className="camp-show-video">

                  <iframe width="550" height="400" src={campaign.vid_url} ></iframe>

                </div>

                <div className="camp-show-overview">

                  <div className="overview-label">
                    InDemand
                  </div>

                  <div className="camp-title">
                    {campaign.title}
                    <strong>:</strong>
                    {campaign.slogan}
                  </div>

                  <div>
                    {campaign.overview}
                  </div>

                  <div className="creator">
                    Creator : {campaign.creator.username}
                  </div>

                  <div className="camp-supporter">
                    ${campaign.contributions} raised by {campaign.supporters} backers
                  </div>

                  <Line className="show-percent-line" percent={percent} strokeWidth="5" strokeColor="#0eb4b6" />

                  <div className="percent-goal">
                    {percent}% of ${campaign.goal}
                  </div>

                  <button className="back-it-button" onClick={this.makeContribution}>Back It</button>

                </div>

              </div>
            </div>

            <br></br>
            <br></br>

            <div className="camp-show-body-container">
              <div className="camp-show-body">

                <div className="camp-show-story">
                  <span className="overview-tag">Overview</span>

                  <div className="overview_image_url">
                    <img src={campaign.overview_image_url} />
                  </div>

                  <span className="story-tag">Story</span>
                  <span>{campaign.story}</span>

                </div>

                <div className="camp-show-reward">
                  <div className="show-perk">Perks</div>

                  <div className="reward-list-container">
                    {rewardList}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      );
    }else {
      return null;
    }

  }

}

export default Campaign;

// <div className="square_image_url">
//   <img src={campaign.square_image_url} />
// </div>
