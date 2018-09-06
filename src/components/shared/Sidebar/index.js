import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from './Logo';
import Slogan from './Slogan';
import UserProfile from './UserProfile';

const Sidebar = props => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
        <Slogan />
      </Link>
      {props.isAuthenticated && (
        <Fragment>
          <HR />
          <UserProfile {...props} />
        </Fragment>
      )}
    </Wrapper>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isFetching: auth.isFetching,
    user: auth.user
  };
};

export default connect(mapStateToProps)(Sidebar);

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
