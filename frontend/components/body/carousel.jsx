import React from 'react';

class Carousels extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      campaigns: [],
      direction: 'left',
      active: false
    };
  }

  componentDidMount(){
    this.props.fetchCarousels();
    this.interval = setInterval(this.auto, 10000);
  }

  render(){
    if(this.props.carousels.length > 0){
      this.state
      return(
        <div className="carousel-container">
          <div>
            <img className="carousel-image" src={this.props.carousels[this.state.pic].carousel_image} />
          </div>
        </div>
      )
    }else {
      return null;
    }
  }

}


export default Carousels;
