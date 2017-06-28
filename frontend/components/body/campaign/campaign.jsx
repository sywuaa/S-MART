import React from 'react';
import { merge } from 'lodash';
import { Component } from 'react-redux';
import { Player } from 'video-react';


class Campaign extends React.Component {
  constructor(props){
    super(props);
    debugger
  }

  componentDidMount(){
    this.props.fetchCampaign(this.props.id)
  }

  render() {
    const {campaign} = this.props;
    if(campaign.id === this.props.currentCampaign){

      return(
        <div className="body">
          <div className="camp-show-page">
            <div className="camp-show-top-block">

              <div className="camp-show-top">

                <div className="camp-show-video">

                  <iframe width="550" height="400" src={campaign.vid_url} ></iframe>

                </div>

                <div className="camp-show-overview">

                  <div className="overview-label">
                    InDemand
                  </div>

                  <div className="camp-title">
                    {campaign.title}
                    <strong>:</strong>
                    {campaign.slogan}
                  </div>

                  <div>
                    {campaign.overview}
                  </div>

                  <div className="square_image_url">
                    <img src={campaign.square_image_url} />
                  </div>


                  <div className="creator">
                    Creator : {campaign.creator.username}
                  </div>

                </div>

              </div>
            </div>

            <br></br>
            <br></br>

            <div className="camp-show-body-container">
              <div className="camp-show-body">

                <div className="camp-show-story">
                  Story go here

                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>
                  <span>blah blah blah</span>

                </div>

                <div className="camp-show-reward">
                  Rewards go here
                </div>

              </div>
            </div>

          </div>

        </div>

      );
    }else {
      return null;
    }
  }

}

export default Campaign;

// <div className="square_image_url">
//   <img src={campaign.square_image_url} />
// </div>
