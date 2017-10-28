import React from 'react';
import { Link } from 'react-router-dom';

class Caro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'left',
      campaigns: [],
      left: 1,
      center: 2,
      right: 3
    };

  }
}
