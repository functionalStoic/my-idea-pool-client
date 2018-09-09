import React from 'react';
import styled from 'styled-components';

export default ({ content, isNew, editStatus, onChange }) => (
  <Li>
    {isNew || editStatus ? (
      <Input type="text" name="content" value={content} onChange={onChange} />
    ) : (
      <span>{content}</span>
    )}
  </Li>
);

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #455e70;
  padding: 7px 0 7px 0;
  font-size: 18px;
  line-height: 27px;
  width: 100%;
`;

const Li = styled.li`
  flex-grow: 5.25 !important;
  text-align: left;
`;
