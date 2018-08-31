import React from 'react';
import styled from 'styled-components';

import EmptyState from './EmptyState';

export default () => {
  return (
    <Wrapper>
      <EmptyState />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
