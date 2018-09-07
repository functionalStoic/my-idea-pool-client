import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions';

import AppWrapper from '../../shared/AppWrapper';
import Header from '../shared/Header';
import InputsWrapper from '../shared/InputsWrapper';
import Input from '../shared/Input';
import SubmitButton from '../shared/SubmitButton';
import RedirectMessage from '../shared/RedirectMessage';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';

const Login = ({ isAuthenticated, errorMessage, isFetching, dispatch }) =>
  isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <AppWrapper loggedIn={isAuthenticated}>
      <Header>Log In</Header>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};

          if (!values.email) {
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
        onSubmit={values => dispatch(loginUser(values))}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid
        }) => (
          <form onSubmit={handleSubmit}>
            <InputsWrapper>
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
              <SubmitButton
                type="submit"
                isFetching={isFetching}
                disabled={isSubmitting || !isValid}
              >
                {isFetching ? 'Loading...' : 'LOG IN'}
              </SubmitButton>
              <RedirectMessage>
                Don't have an account?{' '}
                <Link to="/signup">Create an account</Link>
              </RedirectMessage>
            </ActionButtonWrapper>
          </form>
        )}
      />
    </AppWrapper>
  );

const mapStateToProps = ({ auth }) => ({
  isFetching: auth.isFetching,
  isAuthenticated: auth.isAuthenticated,
  errorMessage: auth.errorMessage
});

export default connect(mapStateToProps)(Login);
