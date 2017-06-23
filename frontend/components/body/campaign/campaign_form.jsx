import React from 'react';
import Basic from './form_components/basic';
import Story from './form_components/story';
import Reward from './form_components/reward';
import { merge } from 'lodash';

const components = {
  basic: Basic,
  story: Story,
  reward: Reward
};


class SaveCampaign extends React.Component {
  constructor(props){
    super(props);

    this.state = merge( {} , this.props.campaign, {component: 'basic'});


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const campaign = this.state;
    this.props.createCampaign({campaign}).then( (camp) => console.log(camp));
  }

  handleClick(target) {
      return () => {
        this.setState({component: target});
      }
  }

  handleChange(input){
    return (e) => {
      window.scrollTo(0,0);
      this.setState({[input]: e.target.value});

    };
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
                Rewards
              </section>
            </div>


          </div>

        <div className="camp-com-page">
          <div className="campaign-form-components">
            <Com change={this.handleChange} campaign={this.state} />
          </div>
        </div>



      </div>
    );
  }

}

export default SaveCampaign;


// <button onClick={this.handleSubmit}>Save</button>
