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


class Campaign extends React.Component {
  constructor(props){
    super(props);


    // this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit() {
  //   const campaign = this.state;
  //   this.props.createCampaign({campaign}).then( (camp) => console.log(camp));
  // }
  //
  // handleClick(target) {
  //     return () => {
  //       this.setState({component: target});
  //     }
  // }
  //
  // handleChange(input){
  //   return (e) => {
  //     window.scrollTo(0,0);
  //     this.setState({[input]: e.target.value});
  //
  //   };
  // }

  render() {

    return(
      <div className="body">
        <div className="camp-show-page">
          <div className="camp-show-top-block">
            <div className="camp-show-top">

              <div className="camp-show-video">
                video go here
              </div>

              <div className="camp-show-overview">
                overview go here
              </div>

            </div>
          </div>

          <br></br>
          <br></br>

          <div>
            <div className="camp-show-body">

              <div className="camp-show-story">


              </div>

              <div className="camp-show-reward">

              </div>

            </div>
          </div>

        </div>

      </div>

    );
  }

}

export default Campaign;
