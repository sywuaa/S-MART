import React from 'react';
import Basic from './form_components/basic';
import Story from './form_components/story';
import Reward from './form_components/reward';
import Final from './form_components/final';
import { merge } from 'lodash';

const components = {
  basic: Basic,
  story: Story,
  reward: Reward,
  final: Final
};


class SaveCampaign extends React.Component {
  constructor(props){
    super(props);
    // this.state = merge( {} , this.props.campaign, {component: 'basic', rewards_attributes: []});
    this.state = {
      component: 'basic',
      rewards_attributes: [],
      title: '',
      goal: '',
      slogan: '',
      square_image: null,
      city: '',
      country: '',
      start_date: '',
      end_date: '',
      vid_url: '',
      overview_image: null,
      overview: '',
      story: '',
      squareUrl: null,
      overviewUrl: null
    };


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRewards = this.handleRewards.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit() {
    const campaign = this.state;
    const formData = new FormData();
    debugger
    Object.keys(campaign).forEach( key => {
      formData.append(`campaign[${key}]`, campaign[key]);
    })

    this.props.createCampaign(formData)
      .then( (obj) => this.props.history.push(`/campaigns/${obj.payload.campaign.id}`)
    );
  }

  updateFile(input) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let fileReader = new FileReader();
      fileReader.onloadend = function () {
        this.setState({ [`${input}_image`]: file, [`${input}Url`]: fileReader.result });
      }.bind(this);

      if(file){
        fileReader.readAsDataURL(file);
      }
    };

  }

  handleClick(target) {
    window.scrollTo(0,0);
    return () => {
      this.setState({component: target});
    };
  }

  handleChange(input){
      return (e) => {
        window.scrollTo(0,0);
        this.setState({[input]: e.target.value});
      };
  }

  handleRewards(reward){
      const rewardList = this.state.rewards_attributes;
      rewardList.push(reward);
      this.setState({rewards_attributes: rewardList});
  }

  render(){
    const Com = components[this.state.component];
    return(
      <div className="camp-page">
          <div className="campaign-sidebar">

            <div className="camp-form-title">
              <div >
                <div>
                  {this.state.title || 'Campaign'}
                </div>
              </div>
            </div>

            <div className="form-tabs">
              <section onClick={this.handleClick('basic')}>
                Basic
              </section>
              <section onClick={this.handleClick('story')}>
                Story
              </section>
              <section onClick={this.handleClick('reward')}>
                Perks
              </section>
              <section onClick={this.handleClick('final')}>
                Final
              </section>
            </div>


          </div>

        <div className="camp-com-page">
          <div className="campaign-form-components">
            <Com change={this.handleChange} campaign={this.state} handleRewards={this.handleRewards} handleSubmit={this.handleSubmit} handleClick={this.handleClick} updateFile={this.updateFile}/>
          </div>
        </div>



      </div>
    );
  }

}

export default SaveCampaign;
