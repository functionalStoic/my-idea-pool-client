import React, { Component } from 'react';
import styled from 'styled-components';

import DeleteConfirmation from './DeleteConfirmation';

import { deleteIdea } from '../../../../../../actions';

import { Edit2x, Delete2x } from '../assets';

export default class EditDelete extends Component {
  state = { showModal: false };

  handleDelete = () => {
    this.closeModal();
    this.props.dispatch(deleteIdea(this.props.id));
  };

  showModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  render() {
    const { isNew, editStatus, onEdit } = this.props;
    return (
      !isNew &&
      !editStatus && (
        <Li>
          <EditImg
            onClick={onEdit}
            src={Edit2x}
            srcSet={`${Edit2x} 2x`}
            alt="Edit Icon"
          />
          <DeleteImg
            onClick={this.showModal}
            src={Delete2x}
            srcSet={`${Delete2x} 2x`}
            alt="Delete Image"
          />
          {this.state.showModal && (
            <DeleteConfirmation
              onDelete={this.handleDelete}
              onCancel={this.closeModal}
            />
          )}
        </Li>
      )
    );
  }
}

const Li = styled.li`
  flex-grow: 1.6 !important;
  text-align: right !important;
  cursor: pointer;
`;

const EditImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 22px;
`;

const DeleteImg = styled.img`
  width: 16px;
  height: 16px;
  padding-left: 22px;
`;
