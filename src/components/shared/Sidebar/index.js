import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Slogan from './Slogan';

export default () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
        <Slogan />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 199.4px;
  background: #00a843;
  a {
    text-decoration: none;
  }
`;
