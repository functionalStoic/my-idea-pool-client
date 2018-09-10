import React from 'react';
import styled from 'styled-components';

import { Bulb, Bulb2x } from './assets';

export default () => (
  <Wrapper>
    <BulbImg src={Bulb} srcSet={`${Bulb2x} 2x`} alt="Bulb Icon" />
    Got Ideas?
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 20px;
  color: #2a3842;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

const BulbImg = styled.img`
  position: relative;
  margin: 37px 94px 13px;
  width: 64px;
  height: 96px;
  background: #ffffff;
  border-radius: 80px;
`;
