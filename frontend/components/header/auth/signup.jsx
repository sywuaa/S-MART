import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
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
    this.props.signup({user});
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
      <section className="signup-container">
        <ul>
          {this.errors()}
        </ul>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}>
            </input>
          </label>

          <label>Password
            <input type ="text"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update("password")}>
            </input>
          </label>

          <label>First Name
            <input type ="text"
              value={this.state.first_name}
              placeholder="First Name"
              onChange={this.update("first_name")}>
            </input>
          </label>

          <label>Last Name
            <input type ="text"
              value={this.state.laste_name}
              placeholder="Last Name"
              onChange={this.update("last_name")}>
            </input>
          </label>

          <label>Email
            <input type ="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update("email")}>
            </input>
          </label>

          <button>Sign Up</button>

        </form>
      </section>
    )
  };
};

export default SignUp;
