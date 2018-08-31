import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
`;

export default ({ children }) => (
  <AppWrapper>
    <Sidebar />
    <Wrapper>{children}</Wrapper>
  </AppWrapper>
);

const Wrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  justify-content: space-evenly;
  align-self: center;
`;
