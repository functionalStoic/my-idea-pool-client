import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const AppWrapper = styled.div`
  display: flex;
`;

export default props => {
  return (
    <AppWrapper>
      <Sidebar {...props} />
      <Wrapper>{props.children}</Wrapper>
    </AppWrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  text-align: center;
  justify-content: space-evenly;
  align-self: center;
`;
