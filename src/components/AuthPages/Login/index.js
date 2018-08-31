import React from 'react';

import AppWrapper from '../../shared/AppWrapper';
import Header from '../shared/Header';
import Input from '../shared/Input';

export default () => (
  <AppWrapper>
    <Header>Log In</Header>
    <label htmlFor="email">Name</label>
    <Input name="email" type="text" />
    <label htmlFor="password">Password</label>
    <Input name="password" type="password" />
    <input type="submit" value="LOG IN" />
    <div>Don't have an account? Create an account</div>
  </AppWrapper>
);
