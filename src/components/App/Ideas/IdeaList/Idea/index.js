import React, { Component } from 'react';
import styled from 'styled-components';

import { updateIdea, createIdea } from '../../../../../actions';

import Content from './Content';
import Impact from './Impact';
import Ease from './Ease';
import Confidence from './Confidence';
import AverageScore from './AverageScore';
import ConfirmCancel from './ActionButtons/ConfirmCancel';
import EditDelete from './ActionButtons/EditDelete';

export default class Idea extends Component {
  defaultState = { ...this.props.idea, editStatus: false };

  state = this.defaultState;

  handleCancelEdit = () => this.setState(this.defaultState);

  handleEdit = () => this.setState({ editStatus: true });

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleConfirm = () => {
    const {
      props: { idea, dispatch },
      state: { content, impact, ease, confidence },
      isNew
    } = this;

    const action = isNew ? createIdea : updateIdea;

    this.setState({ editStatus: false }, () =>
      dispatch(action(idea.id, content, impact, ease, confidence))
    );
  };

  isNew = this.props.idea.status === 'new';

  render() {
    const {
      props: { idea, dispatch },
      state: { editStatus, content, impact, ease, confidence },
      isNew
    } = this;

    return (
      <UlWrapper>
        <Content
          content={content}
          isNew={isNew}
          editStatus={editStatus}
          onChange={this.handleChange}
        />
        <Impact
          impact={impact}
          isNew={isNew}
          editStatus={editStatus}
          onChange={this.handleChange}
        />
        <Ease
          ease={ease}
          isNew={isNew}
          editStatus={editStatus}
          onChange={this.handleChange}
        />
        <Confidence
          confidence={confidence}
          isNew={isNew}
          editStatus={editStatus}
          onChange={this.handleChange}
        />
        <AverageScore
          average={idea.average_score}
          impact={impact}
          ease={ease}
          confidence={confidence}
        />
        <ConfirmCancel
          id={idea.id}
          isNew={isNew}
          editStatus={editStatus}
          dispatch={dispatch}
          onCancelEdit={this.handleCancelEdit}
          onConfirm={this.handleConfirm}
        />
        <EditDelete
          id={idea.id}
          isNew={isNew}
          editStatus={editStatus}
          dispatch={dispatch}
          onEdit={this.handleEdit}
        />
      </UlWrapper>
    );
  }
}

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
