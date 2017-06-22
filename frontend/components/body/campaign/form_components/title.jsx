import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);

  }

  // update(input) {
  //   return e => this.setState({[input]: e.target.value });
  // }

  render(){
    return(
      <div>
        <form>
          <label>Title
            <input onChange={this.props.change('title')}
              value={this.props.title} >

            </input>
          </label>
        </form>
      </div>
    );

  }

}

export default Title;
