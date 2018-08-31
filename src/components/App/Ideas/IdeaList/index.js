import React from 'react';
import styled from 'styled-components';

import Idea from './Idea';

export default ({
  ideas = [{ title: 'idea1' }, { title: 'idea2' }, { title: 'idea3' }]
}) => {
  return (
    ideas.length > 0 && (
      <Wrapper>
        Title Impact Ease Confidence Avg.
        {ideas.map(idea => (
          <Idea idea={idea} />
        ))}
      </Wrapper>
    )
  );
};

const Wrapper = styled.ul``;
