import React from 'react';
import styled from 'styled-components';

import Bulb from './bulb.png';
import Bulb2x from './bulb@2x.png';

export default () => {
  return (
    <Wrapper>
      <Img src={Bulb} srcSet={`${Bulb2x} 2x`} alt="Bulb Icon" />
      Got Ideas?
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 20px;
  color: #2a3842;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  position: relative;
  margin: 37px 94px 13px;
  width: 64px;
  height: 96px;
  background: #ffffff;
  border-radius: 80px;
`;
