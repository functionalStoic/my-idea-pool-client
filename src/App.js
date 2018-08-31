import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default () => (
  <Wrapper>
    <Sidebar />
    <Main />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;
