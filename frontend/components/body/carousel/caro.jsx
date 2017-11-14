import React from 'react';
import { Link } from 'react-router-dom';
import LeftCaro from './left_caro';
import CenterCaro from './center_caro';
import RightCaro from './right_caro';

class Caro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      left: 1,
      center: 2,
      right: 3
    };

    this.handleClick = this.handleClick.bind(this);
    this.calPosition = this.calPosition.bind(this);
  }

  componentDidMount(){
    this.props.fetchCarousels();
    this.interval = setInterval(this.handleClick('right'), 5000);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ campaigns: newProps.carousels });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calPosition(idx,dif) {
    let length = this.state.campaigns.length;
    return (idx + dif + length) % length ;
  }

  handleClick(direction){
    let dif = direction === 'right' ? -1 : 1;
    return () => {
      let newLeft = this.calPosition(this.state.left, dif);
      let newCenter = this.calPosition(this.state.center, dif);
      let newRight = this.calPosition(this.state.right, dif);
      this.setState({center: newCenter, left: newLeft, right: newRight});
    };
  }

  render(){
    return (
      <div className="carousel-container">
        <LeftCaro campaign={this.state.campaigns[this.state.left]} handleClick={this.handleClick}/>
        <CenterCaro campaign={this.state.campaigns[this.state.center]}/>
        <RightCaro campaign={this.state.campaigns[this.state.right]} handleClick={this.handleClick} />
      </div>
    )
  }
}

export default Caro;
