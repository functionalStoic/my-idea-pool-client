import React from 'react';
import { Link } from 'react-router-dom';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';
export default () => (
  <AppWrapper>
    <Header>Log In</Header>
    <Input type="text" placeholder="Email" />
    <br />
    <Input type="password" placeholder="Password" />
    <ActionButtonWrapper>
      <SubmitButton type="submit">LOG IN</SubmitButton>
      Don't have an account? <Link to="/signup">Create an account</Link>
    </ActionButtonWrapper>
  </AppWrapper>
);
