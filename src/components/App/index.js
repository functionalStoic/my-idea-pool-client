import React from 'react';
import styled from 'styled-components';

import AppWrapper from '../shared/AppWrapper';

import Header from './Header';
import Ideas from './Ideas';

export default () => (
  <AppWrapper>
    <Wrapper>
      <Header />
      <Ideas />
    </Wrapper>
  </AppWrapper>
);

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
