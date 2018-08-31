import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import Slogan from './Slogan';
import UserProfileImg from './UserProfileImg';

export default () => (
  <Wrapper>
    <Link to="/">
      <Logo />
      <Slogan />
    </Link>
    <HR />
    <UserProfileImg />

    <ul style={{ justifyContent: 'flex-end' }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  width: 199.4px;
  background: #00a843;
  a {
    text-decoration: none;
  }
`;

const HR = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 41px 27px;
`;
