import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../../actions';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import InputsWrapper from '../shared/InputsWrapper';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';
import RedirectMessage from '../shared/RedirectMessage';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';

class Login extends Component {
  state = { email: '', password: '' };

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace('/');
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    await this.props.dispatch(loginUser(this.state));

    if (this.props.isAuthenticated) {
      this.props.history.replace('/');
    }
  };

  handleChange = ({ target: { type, value } }) =>
    this.setState({ [type]: value });

  render() {
    const {
      handleSubmit,
      handleChange,
      props: { isAuthenticated, errorMessage, isFetching }
    } = this;
    return (
      <AppWrapper loggedIn={isAuthenticated}>
        <Header>Log In</Header>
        <form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input onChange={handleChange} type="email" placeholder="Email" />
            <Input
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </InputsWrapper>
          {errorMessage && `${errorMessage}`}
          <ActionButtonWrapper>
            <SubmitButton
              isFetching={isFetching}
              disabled={isFetching}
              type="submit"
            >
              {isFetching ? 'Loading...' : 'LOG IN'}
            </SubmitButton>
            <RedirectMessage>
              Don't have an account? <Link to="/signup">Create an account</Link>
            </RedirectMessage>
          </ActionButtonWrapper>
        </form>
      </AppWrapper>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isFetching: auth.isFetching,
  isAuthenticated: auth.isAuthenticated,
  errorMessage: auth.errorMessage
});

export default connect(mapStateToProps)(Login);
