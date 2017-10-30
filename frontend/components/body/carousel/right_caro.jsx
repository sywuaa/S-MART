import React from 'react';

class RightCaro extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      direction: 'right'
    };

  }

  render(){
    return(
      <div className="right-caro" >
        Right
      </div>
    );
  }

}

export default RightCaro;
