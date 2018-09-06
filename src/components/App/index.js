import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import decode from 'jwt-decode';

import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

class App extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated || !this.loggedIn()) {
      this.props.history.replace('/login');
    }
  }

  // Checks if there is a saved token and that it's still valid
  loggedIn = () => {
    // Get token from localstorage
    const access_token = localStorage.getItem('access_token');
    return !!access_token && !this.isTokenExpired(access_token);
  };

  isTokenExpired = access_token => {
    try {
      const { exp } = decode(access_token);
      if (exp < Date.now() / 1000) {
        this.props.dispatch(logoutUser());
        return true;
      }
      return false;
    } catch (err) {
      return true;
    }
  };

  render() {
    return (
      <AppWrapper {...this.props}>
        <Wrapper>
          <Header />
          <Ideas />
        </Wrapper>
      </AppWrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
