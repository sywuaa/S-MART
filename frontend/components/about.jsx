import React from 'react';
import { Component } from 'react-redux';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="about">
        <div className='about-app'>
          S-Mart is full-stack web application clone of IndieGoGo, created using Ruby on Rails as the backend with PostgreSQL database and React.js with a Redux architectural framework on the frontend. Users are able to start funding campaigns or make contributions to campaigns they desire. (Because of academic purposes, no payment is accepted) Users can also receive perks from making contributions to campaigns. (No actual perks is being purchased). This app is only for demonstration purposes.
        </div>

        <div className='disclaimer'>
          Please feel free to contact me at sywu.us@gmail.com if you have any questions.
        </div>
      </div>
    );
  }
}

export default About;
