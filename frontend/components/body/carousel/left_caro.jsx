import React from 'react';

class LeftCaro extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      direction: 'left'
    };

  }

  render(){
    return(
      <div className="left-caro" >
        Left
      </div>
    );
  }

}

export default LeftCaro;
