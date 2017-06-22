import React from 'react';

class SaveCampaign extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: ''
    };
  }

  render(){
    return(
      <container className="campaign-bar">
        <section>
          Title
        </section>
        <section>
          Story
        </section>
        <section>
          Rewards
        </section>
      </container>
    );
  }

}

export default SaveCampaign;
