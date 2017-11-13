import React from 'react';

class LeftCaro extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      direction: 'left'
    };
  }

  render(){
    const { campaign } = this.props;

    if (campaign){
      this.img = <img src={campaign.carousel_image} />
    }else {
      this.img = "No Image";
    }

    return(
      <div className="left-caro" >
        <div className="left-caro_image_url" onClick={this.props.handleClick('left')}>
          {this.img}
        </div>
      </div>
    );
  }

}

export default LeftCaro;
