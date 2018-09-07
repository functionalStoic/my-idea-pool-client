import React from 'react';
import styled from 'styled-components';

import Confirm from './confirm.png';
import Confirm2x from './confirm@2x.png';
import Delete from './delete.png';
import Delete2x from './delete@2x.png';

// Sample Todo from API
// {
//   id: 'ir9td2lz8',
//   content: 'the-content',
//   impact: 1,
//   ease: 8,
//   confidence: 8,
//   average_score: 5.666666666666667,
//   created_at: 1524210786
// }

export default ({ idea }) => (
  <UlWrapper>
    <li style={{ flexGrow: 5.25, textAlign: 'left' }}>
      <span>{idea.content}</span>
    </li>
    <li style={{ flexGrow: 1 }}>
      <Dropdown name="impact" id="impact" defaultValue={idea.impact} />
    </li>
    <li style={{ flexGrow: 1 }}>
      <Dropdown name="ease" id="ease" defaultValue={idea.ease} />
    </li>
    <li style={{ flexGrow: 1 }}>
      <Dropdown
        name="confidence"
        id="confidence"
        defaultValue={idea.confidence}
      />
    </li>
    <li style={{ flexGrow: 0.9 }}>{idea.average_score.toFixed(2)}</li>
    <li style={{ flexGrow: 1.6, textAlign: 'right' }}>
      <ConfirmImg src={Confirm} srcSet={`${Confirm2x} 2x`} alt="Confirm Icon" />
      <DeleteImg src={Delete} srcSet={`${Delete2x} 2x`} alt="Bulb Icon" />
    </li>
  </UlWrapper>
);

const ConfirmImg = styled.img`
  width: 19px;
  height: 14px;
`;

const DeleteImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 22px;
`;

const Select = styled.select`
  width: 49.2px;
  height: 36px;
  font-size: 14px;
  line-height: 19px;
`;

const Dropdown = ({ name, id, defaultValue }) => (
  <Select name={name} id={id} defaultValue={defaultValue}>
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

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  flex: 1;
  flex-wrap: wrap;

  li:first-child {
    list-style: disc;
    font-size: 22px;
    line-height: 28px;
    color: rgba(42, 56, 66, 0.4);
    border-bottom: 1px solid rgba(42, 56, 66, 0.5);
  }

  li > span {
    font-size: 16px;
    line-height: 28px;
    color: #2a3842;
    padding-left: 0;
  }

  li {
    flex: 1;
    line-height: 28px;
    align-self: center;
  }
`;
