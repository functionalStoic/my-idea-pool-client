import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import InputsWrapper from '../shared/InputsWrapper';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';
import RedirectMessage from '../shared/RedirectMessage';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';
import AuthService from '../../shared/AuthService';

export default class Login extends Component {
  state = { email: '', password: '' };
  Auth = new AuthService();

  handleFormSubmit = e => {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => this.props.history.replace('/'))
      .catch(err => alert(err));
  };

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace('/');
  }

  handleChange = key => ({ target }) => this.setState({ [key]: target.value });

  render() {
    return (
      <AppWrapper loggedIn={this.Auth.loggedIn()}>
        <Header>Log In</Header>
        <form onSubmit={this.handleFormSubmit}>
          <InputsWrapper>
            <Input
              onChange={this.handleChange('email')}
              type="email"
              placeholder="Email"
            />
            <Input
              onChange={this.handleChange('password')}
              type="password"
              placeholder="Password"
            />
          </InputsWrapper>
          <ActionButtonWrapper>
            <SubmitButton type="submit">LOG IN</SubmitButton>
            <RedirectMessage>
              Don't have an account? <Link to="/signup">Create an account</Link>
            </RedirectMessage>
          </ActionButtonWrapper>
        </form>
      </AppWrapper>
    );
  }
}
