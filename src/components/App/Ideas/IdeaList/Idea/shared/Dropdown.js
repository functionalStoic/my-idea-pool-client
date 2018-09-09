import React from 'react';

import styled from 'styled-components';

export const Dropdown = ({ name, id, onChange, value }) => (
  <Select onChange={onChange} name={name} id={id} value={value}>
    <option value="10">10</option>
    <option value="9">9</option>
    <option value="8">8</option>
    <option value="7">7</option>
    <option value="6">6</option>
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </Select>
);

const Select = styled.select`
  width: 49.2px;
  height: 36px;
  font-size: 14px;
  line-height: 19px;
`;
