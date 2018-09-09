import React, { Fragment } from 'react';
import styled from 'styled-components';

import EmptyState from './EmptyState';
import IdeaList from './IdeaList';
import Pagination from './Pagination';

export default props => (
  <Wrapper ideas={props.ideas}>
    {props.ideas.length > 0 ? (
      <Fragment>
        <IdeaList {...props} />
        <Pagination />
      </Fragment>
    ) : (
      <EmptyState />
    )}
  </Wrapper>
);

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ ideas }) =>
    ideas.length > 0 ? 'flex-start' : 'center'};
  align-items: ${({ ideas }) => (ideas.length > 0 ? 'stretch' : 'center')};
  margin: 0 90px;
`;
