import React from 'react';
import { Component } from 'react-redux';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="footer">
        <div className='foot-icon-container'>
          <div className='foot-icon'>
            <a target='_blank' href="https://www.linkedin.com/in/shaoyong-wu-38a8a4103">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>

          <div className='foot-icon'>
            <a target='_blank' href="https://www.github.com/sywuaa">
            <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>

          <div className='foot-icon'>
            <a target='_blank' href="https://angel.co/shaoyong-wu?public_profile=1">
            <i className="fa fa-angellist" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
