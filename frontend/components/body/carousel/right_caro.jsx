import React from 'react';

class RightCaro extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      direction: 'right'
    };

  }

  render(){
    const { campaign } = this.props;
    let style = `w3-center w3-animate-${this.direction}` ;

    if (campaign){
      this.img = <img src={campaign.carousel_image}/>
    }else {
      this.img = "No Image";
    }


    return(
      <div className="right-caro" >
        <div className="right-caro_image_url" onClick={this.props.handleClick('right')}>
          {this.img}
        </div>
      </div>
    );
  }

}

export default RightCaro;
