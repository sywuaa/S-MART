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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit() {
    const campaign = this.state;
    const formData = new FormData();
    Object.keys(campaign).forEach( key => {
      formData.append(`campaign[${key}]`, campaign[key]);
    });

    formData.append("campaign[rewards_attributes]", JSON.stringify(this.state.rewards_attributes));

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
    return () => {
      window.scroll(0,0);
      this.setState({component: target});
    };
  }

  handleChange(input){
      return (e) => {
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
    if(this.props.errors) {
        this.errorList = this.props.errors.map( error => {
          return (<li key={error}> * {error} </li>);
        });
    }

    this.basicActive = 'null';
    this.storyActive = 'null';
    this.rewardActive = 'null';
    this.finalActive = 'null';
    switch(this.state.component){

      case 'basic':
        this.basicActive = 'active';
        break;

      case 'story':
        this.storyActive = 'active';
        break;

      case 'reward':
        this.rewardActive = 'active';
        break;

      case 'final':
        this.finalActive = 'active';
        break;

    }

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
              <section className={this.basicActive} onClick={this.handleClick('basic')}>
                Basic
              </section>
              <section className={this.storyActive} onClick={this.handleClick('story')}>
                Story
              </section>
              <section className={this.rewardActive} onClick={this.handleClick('reward')}>
                Perks
              </section>
              <section className={this.finalActive} onClick={this.handleClick('final')}>
                Final
              </section>
            </div>


          </div>

        <div className="camp-com-page">
          <ul className="error-container">
            {this.errorList}
          </ul>
          <div className="campaign-form-components">
            <Com change={this.handleChange} campaign={this.state} handleRewards={this.handleRewards} handleSubmit={this.handleSubmit} handleClick={this.handleClick} updateFile={this.updateFile}/>
          </div>
        </div>



      </div>

    );
  }

}

export default SaveCampaign;
