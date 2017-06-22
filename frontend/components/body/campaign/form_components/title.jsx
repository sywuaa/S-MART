import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="camp-title">
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
