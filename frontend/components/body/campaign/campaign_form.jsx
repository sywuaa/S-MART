import React from 'react';
import TitleContainer from './form_components/title_container';

const components = {
  title: TitleContainer,
  body: () => (<div>body</div>),
  reward: () => <div>reward</div>
};


class SaveCampaign extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      component: 'title',
      title: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <page>
        {this.state.title}
        <container className="campaign-sidebar">
          <section onClick={this.handleClick('title')}>
            Title
          </section>
          <section onClick={this.handleClick('body')}>
            Story
          </section>
          <section onClick={this.handleClick('reward')}>
            Rewards
          </section>
        </container>

        <div>
          <Com change={this.handleChange} title={this.state.title} />
        </div>
        

      </page>
    );
  }

}

export default SaveCampaign;
