import React from 'react';
import styled from 'styled-components';

import EmptyState from './EmptyState';
import IdeaList from './IdeaList';

export default () => (
  <Wrapper>
    <EmptyState />
    <IdeaList ideas={undefined} />
  </Wrapper>
);

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
