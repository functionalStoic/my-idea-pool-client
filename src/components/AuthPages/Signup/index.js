import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupUser } from '../../../actions';

import { Formik } from 'formik';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import Input from '../shared/Input';
import InputsWrapper from '../shared/InputsWrapper';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';
import SubmitButton from '../shared/SubmitButton';
import RedirectMessage from '../shared/RedirectMessage';

const Signup = ({ isAuthenticated, dispatch, isFetching, errorMessage }) =>
  isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <AppWrapper>
      <Header>Sign Up</Header>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={values => {
          let errors = {};

          if (!values.name) {
            errors.name = 'Name required';
          } else if (!values.email) {
            errors.email = 'Email required';
          } else if (!values.password) {
            errors.password = 'Password required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={values => dispatch(signupUser(values))}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <InputsWrapper>
              {touched.name && errors.name && <div>{errors.name}</div>}
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                value={values.name}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                value={values.email}
              />
              {touched.password &&
                errors.password && <div>{errors.password}</div>}
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                value={values.password}
              />
            </InputsWrapper>
            {errorMessage && `${errorMessage}`}
            <ActionButtonWrapper>
              <SubmitButton type="submit" disabled={isFetching}>
                {isFetching ? 'Loading...' : 'SIGN UP'}
              </SubmitButton>
              <RedirectMessage>
                Already have an account? <Link to="/login">Log in</Link>
              </RedirectMessage>
            </ActionButtonWrapper>
          </form>
        )}
      />
    </AppWrapper>
  );

const mapStateToProps = ({ auth }) => {
  return {
    isFetching: auth.isFetching,
    isAuthenticated: auth.isAuthenticated,
    errorMessage: auth.errorMessage
  };
};

export default connect(mapStateToProps)(Signup);
