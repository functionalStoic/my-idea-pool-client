import React, { Component } from 'react';
import styled from 'styled-components';

import { logoutUser, getUserInfo } from '../../../actions';

export default class UserProfile extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      // Get User Info on load
      this.props.dispatch(getUserInfo());
    }
  }

  handleLogout = async () => {
    await this.props.dispatch(logoutUser());
    this.props.history.replace('/login');
  };

  render() {
    const { isFetching, user } = this.props;

    if (isFetching) return 'Loading...';
    if (user)
      return (
        user && (
          <div>
            <Img
              src={user.avatar_url}
              srcSet={`${user.avatar_url} 2x`}
              alt="Idea Pool Icon"
            />

            <UserNameWrapper>{user.name}</UserNameWrapper>
            <LogoutWrapper onClick={this.handleLogout}>Log out</LogoutWrapper>
          </div>
        )
      );
    return null;
  }
}

const UserNameWrapper = styled.div`
  font-size: 20px;
  color: #ffffff;
`;

const LogoutWrapper = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: rgba(42, 56, 66, 0.75);
  cursor: pointer;
`;

const Img = styled.img`
  position: relative;
  margin: 0 68px 13px;
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 80px;
`;
