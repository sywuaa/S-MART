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
    this.interval = setInterval(this.handleClick('right'), 5000);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ campaigns: newProps.carousels });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(direction){
    return (e) => {
      if (direction === 'left'){
        this.setState({center: this.state.center-= 1, left: this.state.left-=1, right: this.state.right-= 1});
      }else {
        this.setState({center: this.state.center+= 1, left: this.state.left+=1, right: this.state.right+= 1});
      }
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
