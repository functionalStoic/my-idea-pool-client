import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

class App extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace('/login');
    }
  }

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

const mapStateToProps = ({ auth }) => {
  return { isAuthenticated: auth.isAuthenticated };
};

export default connect(mapStateToProps)(App);
