import React from 'react';
import styled from 'styled-components';

import Idea from './Idea';
import LIFG from './Idea/shared/LIFG';
export default props => {
  return (
    props.ideas.length > 0 && (
      <div>
        <UlWrapper>
          <LIFG num={7.3} />
          <LIFG num={1}>Impact</LIFG>
          <LIFG num={1}>Ease</LIFG>
          <LIFG num={1}>Confidence</LIFG>
          <LIFG num={1}>
            <strong>Avg.</strong>
          </LIFG>
          <LIFG num={2} />
        </UlWrapper>
        {props.ideas.map(idea => (
          <Idea key={idea.id} idea={idea} {...props} />
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
