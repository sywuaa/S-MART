import React from 'react';
import { merge } from 'lodash';
import { Component } from 'react-redux';
import { Player } from 'video-react';
import { Line } from 'rc-progress';
import RewardTile from './reward_tile';
import Modal from 'react-modal';
import LogInContainer from '../../header/auth/login_container';
import SignUpContainer from '../../header/auth/signup_container';
import { Link } from 'react-router-dom';


class Campaign extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      campaign_id: props.id,
      amount: "",
      modalIsOpen: false,
      formType: 'login',
    };

    this.makeContribution = this.makeContribution.bind(this);
    this.getPerk = this.getPerk.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
  }

  componentDidMount(){
    this.props.fetchCampaign(this.props.id);
  }

  componentWillReceiveProps(newProps){
    if(!this.props.campaign || parseInt(newProps.match.params.id) !== this.props.campaign.id){
      this.props.fetchCampaign(newProps.match.params.id);
    }
  }

  openSignupModal() {
    this.state.formType = 'signup';
    this.setState({modalIsOpen: true});
  }


  openLoginModal() {
    this.state.formType = 'login';
    this.setState({modalIsOpen: true});
  }

  openContribution() {
    this.state.formType = 'contribution';
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false, amount: ""});
  }

  toggleFormType(){
    let type;
    this.state.formType === 'login' ? type = 'signup' : type = 'login';
    this.setState({formType: type });
  }

  makeContribution(){
    if(this.props.session !== null){
      this.state.reward_id = 1;
      const contribution = this.state;
      this.props.createContribution(contribution);
      this.openContribution();

    }else {
      this.openLoginModal();
    }
  }

  update(input){
    return(e) => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  getPerk(reward){
    return () => {
      if(this.props.session !== null){
        const contribution = {
          campaign_id: this.props.campaign.id,
          amount: reward.price,
          reward_id: reward.id
        };
        this.props.createContribution(contribution);
        this.openContribution();
      }else {
        this.openLoginModal();
      }
    };
  }

  handleProfile(id){
    return() => {
      this.props.history.push(`/user/profile/${id}`);
    };
  }

  render() {
    const { campaign } = this.props;

    if(campaign && this.props.currentCampaign === parseInt(this.props.id)){
      let percent = parseFloat(campaign.contributions / campaign.goal * 100).toFixed(2);
      let bar = (percent > 100) ? 100 : percent;

      const rewardList = campaign.rewards.map( (reward,index) => {
        return(
          <div className="show-reward-container" key={index} >
            <RewardTile reward={reward} getPerk={this.getPerk} session={this.props.session}/>
          </div>
        );
    });

    const SignUpForm = (
      <div className="modal-container-inside">
        <div className="modal-container-top">
          <div>
            Sign up with email
          </div>
        </div>
        <br></br>
        <SignUpContainer />

        <div className="modal-container-bottom">
          <span>
            By signing up you agree to our Terms of Use and Privacy Policy.
          </span>
        </div>

        <div className="changeAuth-formtype">
          <span>Already have an account?</span>
          <button onClick={this.toggleFormType}>Log In</button>
        </div>

      </div>
    );

    const LogInForm = (
      <div className="modal-container-inside">
        <div className="modal-container-top">
          <div>
            Welcome Back !!
          </div>
        </div>
        <br></br>
        <LogInContainer/>

        <div className="modal-container-bottom">
          <span>
            By logging in you agree to our Terms of Use and Privacy Policy.
          </span>
        </div>

        <div className="changeAuth-formtype">
          <span>New User?</span>
          <button onClick={this.toggleFormType}>Sign Up</button>
        </div>

      </div>
    );


    const Contribution = (
      <div className="modal-contribution">
        <div>
          This app is for demonstration purposes.
        </div>

        <div>
          Please refer to <Link to='/about'>about this app</Link> for additional information.
        </div>

        <div>
          Thanks for you support!!
        </div>
      </div>
    );

    this.form;

    if (this.state.formType == 'login') this.form = LogInForm;
    if (this.state.formType == 'signup') this.form = SignUpForm;
    if (this.state.formType == 'contribution') this.form = Contribution;


      return(
        <div className="camp-show-page">
          <div className="body">

            <div className="show-left-column">

              <div className="camp-show-video">
                <iframe width="550" height="400" src={campaign.vid_url} ></iframe>
              </div>

              <span className="overview-tag">Overview</span>

              <div className="overview_image_url">
                <img src={campaign.overview_image_url} />
              </div>

              <span className="story-tag">Story</span>
              <span className="story">{campaign.story}</span>
            </div>


            <div className="show-right-column">

              <div className="camp-show-overview">

                <div className="overview-label">
                  InDemand
                </div>

                <div className="show-camp-title">
                  {campaign.title}
                  <strong>:</strong>
                  {campaign.slogan}
                </div>

                <div className="show-overview">
                  {campaign.overview}
                </div>

                <div className="creator">
                  <span onClick={this.handleProfile(campaign.creator.id)}>Creator : {campaign.creator.username}</span>
                </div>

                <div className="show-camp-supporter">
                  ${campaign.contributions} raised by {campaign.supporters} backers
                </div>

                <Line className="show-percent-line" percent={bar} strokeWidth="5" strokeColor="#0eb4b6" />

                <div className="show-percent-goal">
                  {percent}% of ${campaign.goal}
                </div>

                <div className="show-overview-bottom">
                  <input type="number" placeholder="$" onChange={this.update("amount")} value={this.state.amount} />
                  <button className="back-it-button" onClick={this.makeContribution}>Back It</button>
                </div>
              </div>

              <div className="camp-show-reward">
                <div className="show-perk">Perks</div>

                <div className="reward-list-container">
                  {rewardList}
                </div>
              </div>

              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className='modal-style'
                contentLabel="auth-form-container"
              >

              <div className="auth-form">
                {this.form}
              </div>
              </Modal>

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
