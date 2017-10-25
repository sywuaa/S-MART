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

  componentDidMount() {
    this.props.fetchCarousel();
    window.addEventListener('animationend', this.slideCarousel);
    this.interval = setInterval(this.autoSlide, 7000);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ campaigns: newProps.carousel });
  }

  componentWillUnmount() {
    window.removeEventListener('animationend', this.slideCarousel);
    clearInterval(this.interval);
  }

  handleClick(idx) {
    return () => {
      clearInterval(this.interval);

      if (idx === 1) {
        this.setState({ active: true, direction: 'right' });
      } else if (idx === 3) {
        this.setState({ active: true, direction: 'left' });
      }
    }
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
