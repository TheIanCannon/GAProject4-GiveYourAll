import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  // class field syntax
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  };

  handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  // Must override the render method
  // The render method take the place of a function component
  // That is, it will ultimately return its UI as JSX
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
												<br/>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
												<br/><br/>
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <br/><br/>
												<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
												<br/><br/>
            <input type="password" name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required />
            <br/><br/>
												<button type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}