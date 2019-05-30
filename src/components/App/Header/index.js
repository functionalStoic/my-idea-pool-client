import React from 'react';
import styled from 'styled-components';
import { newIdea } from '../../../actions';
import AddIdeaIcon from './btn_addanidea.png';
import AddIdeaIcon2x from './btn_addanidea@2x.png';

export default props => {
  return (
    <Wrapper>
      <Header>
        <div style={{ margin: '41px 0 47px 111.6px' }}>My Idea Pool</div>
        <Img
          src={AddIdeaIcon}
          srcSet={`${AddIdeaIcon2x} 2x`}
          alt="Add Idea Icon"
          onClick={() => props.dispatch(newIdea())}
        />
      </Header>
      <hr
        style={{
          margin: '0 87px 0 78.6px',
          border: '1px solid rgba(42,56,66,0.20)'
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: flex-start;
  width: 100%;
`;

const Header = styled.div`
  font-size: 28px;
  color: #2a3842;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  position: relative;
  margin: 37px 94px 13px;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 80px;
`;
