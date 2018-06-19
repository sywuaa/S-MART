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
      var url = "#/campaigns/" + (index + 1);
      return(
        <div key={index}>
          <img src={img} />
          <a href={url} className="view-camp-button"><button>View Campaign</button></a>
        </div>
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
