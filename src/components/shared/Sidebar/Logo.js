import React from 'react';
import styled from 'styled-components';
import IdeaPoolIcon from './IdeaPool_icon.png';
import IdeaPoolIcon2X from './IdeaPool_icon@2x.png';

export default () => (
  <Wrapper>
    <img
      src={IdeaPoolIcon}
      srcSet={`${IdeaPoolIcon2X} 2x`}
      alt="Idea Pool Icon"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  margin: 37px 68px 13px;
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 80px;
`;
