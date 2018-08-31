import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Signup from './Signup';
import Ideas from './Ideas';

export default () => (
  <Wrapper>
    <Login />
    <Signup />
    <Ideas />
  </Wrapper>
);

const Wrapper = styled.div`
  width: '100vw';
  text-align: 'center';
`;
