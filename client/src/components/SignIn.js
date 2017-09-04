import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      this.props.signInUser({ email, password });
      // this.props.signUpUser({ email, password });
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleOnSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button
                className="btn-large waves-effect waves-light"
                type="submit"
                name="action"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="row">
            Login with <a href="/auth/google">Google</a> or{' '}
            <a href="/auth/facebook">Facebook</a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
