import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIdeas } from '../../actions';
import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getIdeas());
  }
  render() {
    return !this.props.isAuthenticated ? (
      <Redirect to="/login" />
    ) : (
      <AppWrapper {...this.props}>
        <Wrapper>
          <Header {...this.props} />
          <Ideas {...this.props} />
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

const mapStateToProps = ({ auth, ideas }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isFetching: ideas.isFetching,
    ideas: ideas.ideas
  };
};

export default connect(mapStateToProps)(App);
