import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';

import AppWrapper from '../../shared/AppWrapper';

import Header from '../shared/Header';
import Input from '../shared/Input';
import InputsWrapper from '../shared/InputsWrapper';
import ActionButtonWrapper from '../shared/ActionButtonWrapper';
import SubmitButton from '../shared/SubmitButton';
import RedirectMessage from '../shared/RedirectMessage';

import AuthService from '../../shared/AuthService';

export default class Signup extends Component {
  Auth = new AuthService();

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace('/');
  }

  render() {
    return (
      <AppWrapper>
        <Header>Sign Up</Header>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validate={values => {
            // same as above, but feel free to move this into a class method now.
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
          onSubmit={(
            values,
            { setSubmitting, setErrors /* setValues and other goodies */ }
          ) => {
            // LoginToMyApp(values).then(
            //   user => {
            //     setSubmitting(false);
            //     // do whatevs...
            //     // props.updateUser(user)
            //   },
            //   errors => {
            //     setSubmitting(false);
            //     // Maybe transform your API's errors into the same shape as Formik's
            //     setErrors(transformMyApiErrors(errors));
            //   }
            // );
            return (
              <Redirect
                to={{
                  pathname: '/'
                }}
              />
            );
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
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
              <ActionButtonWrapper>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  SIGN UP
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
  }
}
