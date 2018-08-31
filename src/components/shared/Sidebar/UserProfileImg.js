import React from 'react';
import styled from 'styled-components';
import UserProfilePic from './User_ProfilePic.png';
import UserProfilePic2X from './User_ProfilePic@2x.png';

export default () => (
  <Wrapper>
    <Img
      src={UserProfilePic}
      srcSet={`${UserProfilePic2X} 2x`}
      alt="Idea Pool Icon"
    />

    <UserNameWrapper>Joyce Lee</UserNameWrapper>
    <LogoutWrapper>Log out</LogoutWrapper>
  </Wrapper>
);

const Wrapper = styled.div``;

const UserNameWrapper = styled.div`
  font-size: 20px;
  color: #ffffff;
`;

const LogoutWrapper = styled.div`
  font-size: 16px;
  color: rgba(42, 56, 66, 0.65);
`;

const Img = styled.img`
  position: relative;
  margin: 0 68px 13px;
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 80px;
`;
