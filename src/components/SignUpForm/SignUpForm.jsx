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
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {

      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

   render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
												<br/>
            <input type="text" Name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required />
												<br/><br/>
            <input type="email" Name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <br/><br/>
												<input type="password" Name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
												<br/><br/>
            <input type="password" Name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required />
            <br/><br/>
												<button name="SignUpButton" type="submit" disabled={disable}>Sign Up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}