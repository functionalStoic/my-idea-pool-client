import React from 'react';
import styled from 'styled-components';

import withAuth from '../shared/withAuth';

import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

const App = props => {
  return (
    <AppWrapper {...props}>
      <Wrapper>
        <Header />
        <Ideas />
      </Wrapper>
    </AppWrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default withAuth(App);
