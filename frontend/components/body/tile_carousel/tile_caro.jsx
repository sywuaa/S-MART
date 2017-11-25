import React from 'react';
import { Link } from 'react-router-dom';

class TileCaro extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tiles: [],
      center: 3,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ tiles: newProps.tiles });
  }


  render(){
    if(this.props.tiles){
      this.tileList = this.state.tiles.slice(this.state.center, this.state.center+4);
    }

    return (
      <div className="tiles-container">
        {this.tileList}
      </div>
    );
  }

}

export default TileCaro;
