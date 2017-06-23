import React from 'react';

class Basic extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div className="camp-components">
        <div>
          <h2>Basic</h2>
        </div>
        <div>
          <span className="basic">
            Make a good first impression: introduce your campaign objectives and entice people to learn more. This basic information will represent your campaign on your campaign page, on your campaign card, and in searches.
          </span>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Campaign Title * </label>
          <label className="label-tag2">What is the title of your campaign?</label>

            <input className="form-input" onChange={this.props.change('title')}
              value={this.props.title} placeholder="Title" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Campaign Tagline *</label>
          <label className="label-tag2">Provide a short description that best describes your campaign to your audience.</label>

            <input className="form-input" onChange={this.props.change('slogan')}
              value={this.props.slogan} placeholder="TagLine  /  Slogan" >
            </input>
        </div>

        <div>
          <br></br>
          <br></br>
          <label className="label-tag">IMAGE IMAGE IMAGE * </label>
          <label className="label-tag2">Upload a square image that represents your campaign.640 x 640 recommended resolution, 220 x 220 minimum resolution.
          </label>

            <input type="textarea" className="form-input" onChange={this.props.change('square_image')}  placeholder="IMAGE HERE"
              value={this.props.square_image} >
            </input>
        </div>

        <div>
          <br></br>
          <br></br>
          <label className="label-tag">Location * </label>
          <label className="label-tag2">Choose the location where you are running the campaign. This location will be visible on your campaign page for your audience to see.</label>

          <div className="camp-form-location">
            <div>
              <input type="text" className="form-input" onChange={this.props.change('city')} placeholder="City"
                value={this.props.city} >
              </input>
            </div>

            <div>
              <input type="text" className="form-input" onChange={this.props.change('country')} placeholder="Country"
                value={this.props.country} >
              </input>
            </div>
          </div>
        </div>


        <div>
          <br></br>
          <br></br>
          <label className="label-tag">Campaign Duration *</label>
          <label className="label-tag2">Please set the duration of the campaign</label>

          <div className="camp-form-date">
            <div>
              <input type="date" onChange={this.props.change('start_date')}
                value={this.props.start_date} >
              </input>
            </div>

            <div>
              <input type="date" onChange={this.props.change('end_date')}
                value={this.props.end_date} >
              </input>
            </div>
          </div>

        </div>

        <div className="camp-form-continue-submit">
          <div>
            <button onClick={this.props.change('component')} value='story'>Save & Continue</button>
          </div>
        </div>

      </div>
    );

  }

}

export default Basic;
