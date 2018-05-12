import React from 'react';
import Carousel from 'nuka-carousel';

class Caro extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCarousels();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    this.imageList = this.props.images.map((img,index) => {
      return(
        <img key={index} src={img} />
      );
    });

    return (
      <Carousel wrapAround={true} autoplayInterval={5000} autoplay>
        {this.imageList}
      </Carousel>
    );
  }
}

export default Caro;

// <div>
//     <img src={this.state.slides[1].carousel_image} />
// </div>
// <div>
//     <img src={this.state.slides[2].carousel_image} />
// </div>
// <div>
//     <img src={this.state.slides[3].carousel_image} />
// </div>
// <div>
//     <img src={this.state.slides[4].carousel_image}/>
// </div>
// <div>
//     <img src={this.state.slides[5].carousel_image} />
// </div>
// <div>
//     <img src={this.state.slides[6].carousel_image} />
// </div>
