import React from 'react';
// import Carousel from 'nuka-carousel';

class Carousels extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pic: 0
    };
  }

  componentDidMount(){
    this.props.fetchCarousels();
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

// const Slides = React.createClass( {
//   minxin
//   componentDidMount(){
//   },
//
//   render() {
//     return (
//       <div style={{height: '400px'}} >
//         <Carousel>
//           <img src="http://s3-us-east-2.amazonaws.com/smart-aa-dev/campaigns/carousel_images/000/000/001/original/3.png?1499957138" />
//             <img src="http://s3-us-east-2.amazonaws.com/smart-aa-dev/campaigns/carousel_images/000/000/001/original/3.png?1499957138" />
//         </Carousel>
//       </div>
//     )
//   }
// });

// export default Slides;
