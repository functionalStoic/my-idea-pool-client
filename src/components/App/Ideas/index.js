import React from 'react';
import styled from 'styled-components';

import EmptyState from './EmptyState';
import IdeaList from './IdeaList';

export default () => (
  <Wrapper>{ideas ? <IdeaList ideas={ideas} /> : <EmptyState />}</Wrapper>
);

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 0 90px;
`;

const ideas = [
  {
    id: 'ir9td2tvq',
    content: 'Finish Ideas Layout',
    impact: 3,
    ease: 8,
    confidence: 8,
    average_score: 6.333333333333333,
    created_at: 1524210786
  },
  {
    id: 'ir9td2p51',
    content: 'Build Redux State, Reducers and Actions.',
    impact: 2,
    ease: 8,
    confidence: 8,
    average_score: 6.0,
    created_at: 1524210786
  },
  {
    id: 'ir9td2lz8',
    content: 'Build Ajax Requests',
    impact: 1,
    ease: 8,
    confidence: 8,
    average_score: 5.666666666666667,
    created_at: 1524210786
  }
];
