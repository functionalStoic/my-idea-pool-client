import React from 'react';
import { Link } from 'react-router-dom';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';

export default () => (
  <AppWrapper>
    <Header>Sign Up</Header>
    <Input type="text" placeholder="Name" />
    <br />
    <Input type="text" placeholder="Email" />
    <br />
    <Input type="password" placeholder="Password" />
    <ActionButtonWrapper>
      <SubmitButton type="submit">SIGN UP</SubmitButton>
      <div>
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </ActionButtonWrapper>
  </AppWrapper>
);
