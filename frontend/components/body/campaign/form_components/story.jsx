import React from 'react';

class Story extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="camp-components">
        <div>
          <h2>Pitch Video or Image</h2>
        </div>
        <div>
          <span className="story">
            Add a video or image to appear on the top of your campaign page. Campaigns with videos raise 2000% more than campaigns without videos. Keep your video 2-3 minutes. Learn how to make a great video.
          </span>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Video URL *</label>
          <label className="label-tag2">Enter a YouTube or Vimeo URL to appear at the top of your campaign page.</label>

            <input className="form-input" onChange={this.props.change('vid_url')}
              value={this.props.campaign.vid_url} placeholder="http://" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Video Overlay Image (Optional)</label>
          <label className="label-tag2">Choose an image to represent your video before it plays. 640 x 427 recommended resolution, 620 x 415 minimum resolution.</label>

            <input className="form-input" onChange={this.props.change('vid_olay_image_url')}
              value={this.props.campaign.vid_olay_image_url} placeholder="http://" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <h2>Campaign Overview</h2>
        </div>
        <div>
          <span className="story">
            Introduce yourself, your background, your campaign and why it’s important to you. Express the magnitude of what contributors will help you achieve.
          </span>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Overview Image *</label>
          <label className="label-tag2">Choose an image for the overview section of your campaign page. Pick an image that shows off your product or the benefit of your campaign. PNG or JPG. 320 x 240 recommended resolution.</label>

            <input className="form-input" onChange={this.props.change('overview_image_url')}
              value={this.props.campaign.overview_image_url} placeholder="http://" >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Campaign Overview *</label>
          <label className="label-tag2">Lead with a compelling statement that describes your campaign and why it’s important to you, highlight key campaign features, and remember - keep it short!</label>

            <input className="form-input" onChange={this.props.change('over_view')}
              value={this.props.campaign.over_view} placeholder="Tell us a bit" >
            </input>
        </div>


        <div>
        <br></br>
        <br></br>
          <h2>Campaign Pitch *</h2>
        </div>
        <div>
          <span className="story">
            Tell potential contributors more about your campaign. Provide details that will motivate people to contribute. A good pitch is compelling, informative, and easy to digest.
          </span>
          <br></br>
          <br></br>

            <input type="textarea" onChange={this.props.change('story')}
              value={this.props.campaign.story} placeholder="Tell us the story">
            </input>
        </div>

        <div className="camp-form-continue-submit">
          <div>
            <button onClick={this.props.change('component')} value='reward'>Save & Continue</button>
          </div>
        </div>


      </div>
    );

  }

}

export default Story;
