import React from 'react';
import Title from './form_components/title';
import Story from './form_components/story';

const components = {
  title: Title,
  story: Story,
  reward: () => <div>reward</div>
};


class SaveCampaign extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      component: 'title',
      title: '',
      story: '',
      reward: '',
      goal_amt: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const campaign = this.state
    this.props.createCampaign({campaign}).then( (camp) => console.log(camp));
  }

  handleClick(target) {
      return () => {
        this.setState({component: target})
      }
  }

  handleChange(input){
    return (e) => {
      this.setState({[input]: e.target.value})
    }
  }

  render(){

    const Com = components[this.state.component];

    return(
      <page className="camp-page">
        <div className="camp-form-title">
          <container className="campaign-sidebar">

            <section >
              <div>
                {this.state.title || 'Campaign'}
              </div>
            </section>

            <div className="form-tabs">
              <section onClick={this.handleClick('title')}>
                Title
              </section>
              <section onClick={this.handleClick('story')}>
                Story
              </section>
              <section onClick={this.handleClick('reward')}>
                Rewards
              </section>
            </div>
          </container>
        </div>

        <div className="camp-com-page">
          <div>
            <Com change={this.handleChange} title={this.state.title} story={this.state.story} />
          </div>
        </div>



      </page>
    );
  }

}

export default SaveCampaign;


// <button onClick={this.handleSubmit}>Save</button>
