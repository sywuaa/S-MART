import React from 'react';

class Story extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="camp-story">
        <form>
          <label>Story
            <input onChange={this.props.change('story')}
              value={this.props.story} >

            </input>
          </label>
        </form>
      </div>
    );

  }

}

export default Story;
