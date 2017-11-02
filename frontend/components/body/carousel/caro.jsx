import React from 'react';
import { Link } from 'react-router-dom';
import LeftCaro from './left_caro';
import CenterCaro from './center_caro';
import RightCaro from './right_caro';

class Caro extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <div className="carousel-container">
        <LeftCaro campaign={this.state.campaigns[this.state.left]}/>
        <CenterCaro campaign={this.state.campaigns[this.state.center]}/>
        <RightCaro campaign={this.state.campaigns[this.state.right]}/>
      </div>
    )


  }
}

export default Caro;
