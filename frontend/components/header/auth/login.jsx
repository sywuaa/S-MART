import React, { Component } from 'react';

class LogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);


  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  update(input) {
    return e => this.setState({[input]: e.target.value });
  }

  errors() {
    if(this.props.errors) {
      return (
        this.props.errors.map( error => {
          return (<li key={error}> * {error} </li>);
        })
      );
    }
  }

  render() {
    return(
      <section className="login-container">
        <ul>
          {this.errors()}
        </ul>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}>
            </input>
          </label>

          <label>
            <input type ="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update("password")}>
            </input>
          </label>

          <div className="form-button">
            <button>Log In</button>
          </div>

        </form>
      </section>
    )
  };
};

export default LogIn;
