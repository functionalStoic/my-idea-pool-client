import React from 'react';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import Input from '../shared/Input';

export default () => (
  <AppWrapper>
    <Header>Sign Up</Header>
    <label htmlFor="name">Name</label>
    <Input name="name" type="text" />
    <label htmlFor="email">Email</label>
    <Input name="email" type="text" />
    <label htmlFor="password">Password</label>
    <Input name="password" type="password" />
    <input type="submit" value="SIGN UP" />
    <div>Already have an account? Log in</div>
  </AppWrapper>
);
