import React from 'react';
import { Link } from 'react-router-dom';

class Caro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'left',
      campaigns: [],
      left: 0,
      center: 1,
      right: 2
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(direction){
    if (direction === 'left'){
      this.setState(this.state.center -= 1);
    }else {
      this.setState(this.state.center += 1);
    }
  }






}
