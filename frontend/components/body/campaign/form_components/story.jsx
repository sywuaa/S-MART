import React from 'react';

class Story extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="camp-title">
        <div>
          <h2>Pitch Video or Image</h2>
        </div>
        <div>
          <span className="basic">
            Add a video or image to appear on the top of your campaign page. Campaigns with videos raise 2000% more than campaigns without videos. Keep your video 2-3 minutes. Learn how to make a great video.
          </span>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Video URL *</label>
          <label className="label-tag2">Enter a YouTube or Vimeo URL to appear at the top of your campaign page.</label>

            <input className="form-input" onChange={this.props.change('title')}
              value={this.props.title} >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">Campaign Tagline *</label>
          <label className="label-tag2">CProvide a short description that best describes your campaign to your audience.</label>

            <input className="form-input" onChange={this.props.change('title')}
              value={this.props.title} >
            </input>
        </div>

        <div>
        <br></br>
        <br></br>
          <label className="label-tag">IMAGE IMAGE IMAGE * </label>
          <label className="label-tag2">What is the title of your campaign?</label>

            <input type="textarea" className="form-input" onChange={this.props.change('title')}
              value={this.props.title} >
            </input>
        </div>
      </div>
    );

  }

}

export default Story;
