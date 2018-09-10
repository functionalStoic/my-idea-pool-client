import React from 'react';
import styled from 'styled-components';

import { getIdeas } from '../../../actions';

export default ({ page, dispatch, ideas }) => (
  <Wrapper>
    <DirectionButton
      disabled={page === 1}
      onClick={() => dispatch(getIdeas(page - 1))}
      page={page}
      ideas={ideas}
      children="back"
    />
    {`Page ${page}`}
    <DirectionButton
      disabled={ideas.length < 10}
      onClick={() => dispatch(getIdeas(page + 1))}
      page={page}
      ideas={ideas}
      children="next"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  margin-top: 25px;
  width: 100%;
`;

const DirectionButton = styled.button`
  font-size: 20px;
  border-radius: 5px;
  border: ${({ page, children, ideas }) =>
    (children === 'previous' && page === 1) ||
    (children === 'next' && ideas.length < 10)
      ? 'gray 1px solid'
      : 'black 1px solid'};
  padding: 5px;
  cursor: ${({ page, children, ideas }) =>
    (children === 'previous' && page === 1) ||
    (children === 'next' && ideas.length < 10)
      ? 'not-allowed'
      : 'pointer'};
`;
