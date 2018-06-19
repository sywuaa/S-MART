import React from 'react';

class Final extends React.Component {
    constructor(props) {
      super(props);

    }

  render(){

    return(
      <div className="camp-components-final">
        <div>
          <h2>Final</h2>
        </div>
        <div>
          <span className="story">
            Thank you! Your campaign is ready to launch. We wish you the best and hope you campaign will reach and exceed your goal in no time.
          </span>
        </div>

        <div className="camp-form-launch">
          <div className="launch-button-container">
            <button onClick={this.props.handleSubmit}>LAUNCH </button>
          </div>
        </div>

      </div>
    );

  }

}

export default Final;
