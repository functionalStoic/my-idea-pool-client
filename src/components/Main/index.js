import React from 'react';
import styled from 'styled-components';

import AuthPages from './AuthPages';
import Ideas from './Ideas';

export default () => (
  <Wrapper>
    <AuthPages />
    <Ideas />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
`;
