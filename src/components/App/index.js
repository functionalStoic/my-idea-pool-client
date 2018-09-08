import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

const App = props =>
  !props.isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <AppWrapper {...props}>
      <Wrapper>
        <Header />
        <Ideas {...props} />
      </Wrapper>
    </AppWrapper>
  );

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = ({ auth, ideas }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    ideas: ideas.ideas
  };
};

export default connect(mapStateToProps)(App);
