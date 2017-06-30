import React from 'react';

class Reward extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: '',
        description: '',
        price: '',
        item: ''
      };

      this.handlePerk = this.handlePerk.bind(this);
    }

    update(input) {
      return e => this.setState({[input]: e.target.value});
    }

    handlePerk() {
      const reward = this.state;
      this.props.handleRewards(reward);

      this.setState({
        title: '',
        description: '',
        price: '',
        item: ''
      });
    }

  render(){
    if(this.props.campaign.rewards_attributes) {
      this.rewardList = this.props.campaign.rewards_attributes.map( (reward,index) => {
        return (

          <div key={index} className="reward-space">
            <strong>Perk {index+1} :</strong>
            <div className="reward-container">

              <div className="reward-element">
                <span>Title:</span>
                <span>Price:</span>
                <span>Item:</span>
                <span>description:</span>

              </div>

              <div className="reward-element-attributes">
                <span>{reward.title}</span>
                <span>${reward.price}</span>
                <span>{reward.item}</span>
                <span>{reward.description}</span>
              </div>

            </div>

          </div>
        );
      });
    }

    return(
      <div className="camp-components">
        <div>
          <h2>Perks</h2>
        </div>
        <div>
          <span className="story">
            Perks are incentives offered to backers in exchange for their support. You may edit your perk details until the perk is claimed. Visit the Help Center to learn about different kinds of perks you can offer.
          </span>
        </div>

        <div className="rewardList-container">
          {this.rewardList}
        </div>


        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Title *</label>
          <label className="label-tag2">The title for your perk is what will appear on your campaign page and throughout Indiegogo. Create a title that best describes the contents of what this perk is offering.</label>

            <input className="form-input" onChange={this.update('title')}
              value={this.state.title} placeholder="Title">
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Price *</label>
          <label className="label-tag2">Set an amount that you want to collect from backers who claim this perk. This amount should represent how much you want to receive for all the items included in this perk.</label>

            <input className="form-input" onChange={this.update('price')} type="number"
              value={this.state.price} placeholder="$ 0" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Included Items *</label>
          <label className="label-tag2">What items are you offering to backers who claim this perk? Items could be physical, digital, experiences, or even just a thank you. You can specify how many you are offering in this perk.</label>

            <input className="form-input" onChange={this.update('item')}
              value={this.state.item} placeholder="Item" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Description *</label>
          <label className="label-tag2">Describe the details of this perk. Be creative, this is your opportunity to educate backers on what they will be receiving after they claim this perk.</label>

            <input className="form-input" onChange={this.update('description')}
              value={this.state.description} placeholder="Description" >
            </input>
        </div>



        <div className="camp-form-continue-submit">
          <div>
            <button onClick={this.handlePerk}> Add Perk </button>
          </div>
        </div>

        <div className="camp-form-continue-submit">
          <div>
            <button onClick={this.props.handleClick('final')} value='final'>Save & Continue</button>
          </div>
        </div>


      </div>
    );

  }

}

export default Reward;
