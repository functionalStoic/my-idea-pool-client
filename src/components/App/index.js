import React from 'react';
import styled from 'styled-components';

import AppWrapper from '../shared/AppWrapper';

export default () => (
  <AppWrapper>
    <Header>My Ideas</Header>
  </AppWrapper>
);

const Header = styled.div`
  font-size: 28px;
  color: #2a3842;
`;
