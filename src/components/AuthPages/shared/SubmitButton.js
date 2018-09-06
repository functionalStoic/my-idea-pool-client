import styled from 'styled-components';

export default styled.button`
  background: ${props => (props.isFetching ? 'gray' : '#00a843')};
  width: 151px;
  height: 40px;
  font-size: 14px;
  color: #ffffff;
`;
