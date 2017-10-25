import React from 'react';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      campaigns: [],
      direction: 'left',
    };

    this.autoSlide = this.autoSlide.bind(this);
    this.slideCarousel = this.slideCarousel.bind(this);
  }

  componentDidMount() {
    this.props.fetchCarousels();
    window.addEventListener('animationend', this.slideCarousel);
    this.interval = setInterval(this.autoSlide, 5000);
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
    };
  }

  autoSlide() {
    this.setState({ active: true, direction: 'left' });
  }

  centerTile(idx) {
    if (this.state.active) {
      const { direction } = this.state;

      if ((idx === 1 && direction === 'right') ||
      (idx === 3 && direction === 'left')) {
        return 'details-visible';
      }
      if (idx === 2) { return "details-invisible"; }
    }

    return "";
  }

  slideCarousel(e) {
    e.stopPropagation();
    if (!this.state.active) return;

    const { direction } = this.state;

    if (e.animationName === 'slide-left' || e.animationName === 'slide-right') {
      if (direction === 'right') {
        this.slideToTheRight();
      } else if (direction === 'left') {
        this.slideToTheLeft();
      }
    }
  }

  slideToTheLeft() {
    const copyCarousel = this.state.carousels.slice();
    copyCarousel.push(copyCarousel.shift());
    this.setState({ active: false, carousels: copyCarousel });
  }

  slideToTheRight() {
    const copyCarousel = this.state.carousels.slice();
    copyCarousel.unshift(copyCarousel.pop());
    this.setState({ active: false, carousels: copyCarousel });
  }

  renderCarouselTiles() {
    return this.props.carousels.map((carousel, idx) => {
    let tileClass = (idx === 2 ? "main-tile" : "side-tile");
    let slide = (this.state.active ? `slides-${this.state.direction}` : "");

    let style = {
      backgroundImage: `url(${carousel.carousel_image})`
    };

    return (
      <div key={idx} className={`carousel-tile ${slide}`} style={style}
           onClick={this.handleClick(idx).bind(this)}>
        <div className={`${tileClass} ${this.centerTile(idx)}`}>
          <Link className="carousel-btn" to={`campaigns/${carousel.id}`} >
            <span>SEE CAMPAIGN</span>
          </Link>
        </div>
      </div>
    );
    });
  }

  render() {
    return (
      <div className="carousel-tiles">
        {this.renderCarouselTiles()}
      </div>
    )
  }
}

export default Carousel;
