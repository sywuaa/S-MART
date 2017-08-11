import React from 'react';
import { merge } from 'lodash';
import { Component } from 'react-redux';
import { Player } from 'video-react';
import { Line } from 'rc-progress';
import RewardTile from './reward_tile';


class Campaign extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      campaign_id: props.id,
      amount: ""
    };

    this.makeContribution = this.makeContribution.bind(this);
    this.getPerk = this.getPerk.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
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
    this.state.reward_id = 1;
    const contribution = this.state;
    this.props.createContribution(contribution);
  }

  update(input){
    return(e) => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  getPerk(reward){
    return(e) => {
      const contribution = {
        campaign_id: this.props.campaign.id,
        amount: reward.price,
        reward_id: reward.id
      };
      this.props.createContribution(contribution);
    };
  }

  handleProfile(id){
    return() => {
      this.props.history.push(`/user/profile/${id}`);
    };
  }

  render() {
    const { campaign } = this.props;

    if(campaign && this.props.currentCampaign === parseInt(this.props.id)){
      let percent = parseFloat(campaign.contributions / campaign.goal * 100).toFixed(2);
      let bar = (percent > 100) ? 100 : percent;

      const rewardList = campaign.rewards.map( (reward,index) => {
        return(
          <div className="show-reward-container" key={index} >
            <RewardTile reward={reward} getPerk={this.getPerk}/>
          </div>
        );
      });


      return(
        <div className="camp-show-page">
          <div className="body">

            <div className="show-left-column">

              <div className="camp-show-video">
                <iframe width="550" height="400" src={campaign.vid_url} ></iframe>
              </div>

              <span className="overview-tag">Overview</span>

              <div className="overview_image_url">
                <img src={campaign.overview_image_url} />
              </div>

              <span className="story-tag">Story</span>
              <span className="story">{campaign.story}</span>
            </div>


            <div className="show-right-column">

              <div className="camp-show-overview">

                <div className="overview-label">
                  InDemand
                </div>

                <div className="show-camp-title">
                  {campaign.title}
                  <strong>:</strong>
                  {campaign.slogan}
                </div>

                <div className="show-overview">
                  {campaign.overview}
                </div>

                <div className="creator">
                  <span onClick={this.handleProfile(campaign.creator.id)}>Creator : {campaign.creator.username}</span>
                </div>

                <div className="show-camp-supporter">
                  ${campaign.contributions} raised by {campaign.supporters} backers
                </div>

                <Line className="show-percent-line" percent={bar} strokeWidth="5" strokeColor="#0eb4b6" />

                <div className="show-percent-goal">
                  {percent}% of ${campaign.goal}
                </div>

                <div className="show-overview-bottom">
                  <input type="number" placeholder="$" onChange={this.update("amount")} />
                  <button className="back-it-button" onClick={this.makeContribution}>Back It</button>
                </div>
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
