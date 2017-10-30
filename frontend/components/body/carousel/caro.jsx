import React from 'react';
import { Link } from 'react-router-dom';
import LeftCaro from './left_caro';
import CenterCaro from './center_caro';
import RightCaro from './right_caro';

class Caro extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      direction: 'left',
      campaigns: [],
      left: 1,
      center: 2,
      right: 3
    };

    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount(){
    this.props.fetchCarousels();
  }

  componentWillReceiveProps(newProps) {
    debugger
    this.setState({ campaigns: newProps.carousels });
  }

  handleClick(direction){
    if (direction === 'left'){
      this.setState(this.state.center -= 1);
    }else {
      this.setState(this.state.center += 1);
    }
  }

  render(){
    debugger
    return (
      <div className="carousel-container">
        <LeftCaro campaign={this.state.campaigns[this.state.left]}/>
        <CenterCaro />
        <RightCaro />
      </div>
    )


  }
}

export default Caro;
