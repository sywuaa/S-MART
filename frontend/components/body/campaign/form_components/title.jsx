import React from 'react';

class Title extends React.Component {
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

export default Title;
