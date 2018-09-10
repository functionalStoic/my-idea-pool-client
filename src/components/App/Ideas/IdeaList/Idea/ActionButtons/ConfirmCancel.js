import React from 'react';
import styled from 'styled-components';
import { cancelIdea } from '../../../../../../actions';

import { Confirm, Confirm2x, Cancel, Cancel2x } from '../assets';

export default ({
  id,
  isNew,
  editStatus,
  dispatch,
  status,
  onConfirm,
  onCancelEdit
}) =>
  (isNew || editStatus) && (
    <Li>
      <ConfirmImg
        onClick={onConfirm}
        src={Confirm}
        srcSet={`${Confirm2x} 2x`}
        alt="Confirm Icon"
      />
      <CancelImg
        onClick={() => (isNew ? dispatch(cancelIdea(id)) : onCancelEdit())}
        src={Cancel}
        srcSet={`${Cancel2x} 2x`}
        alt="Cancel Icon"
      />
    </Li>
  );

const Li = styled.li`
  flex-grow: 1.6 !important;
  text-align: right !important;
  cursor: pointer;
`;

const ConfirmImg = styled.img`
  width: 19px;
  height: 14px;
`;

const CancelImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 22px;
`;
