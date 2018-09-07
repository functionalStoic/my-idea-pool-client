import React from 'react';
import styled from 'styled-components';

import Idea from './Idea';

export default ({
  ideas = [{ title: 'idea1' }, { title: 'idea2' }, { title: 'idea3' }]
}) => {
  return (
    ideas.length > 0 && (
      <div>
        <UlWrapper>
          <li style={{ flexGrow: 7.3 }} />
          <li style={{ flexGrow: 1 }}>Impact</li>
          <li style={{ flexGrow: 1 }}>Ease</li>
          <li style={{ flexGrow: 1 }}>Confidence</li>
          <li style={{ flexGrow: 1 }}>
            <strong>Avg.</strong>
          </li>
          <li style={{ flexGrow: 2 }} />
        </UlWrapper>

        {ideas.map(idea => (
          <Idea key={idea.id} idea={idea} />
        ))}
      </div>
    )
  );
};

const UlWrapper = styled.ul`
  display: flex;
  flex-grow: 1;
  list-style: none;
  flex-wrap: wrap;
  li {
    flex: 1;
    padding: 10px;
  }
`;
