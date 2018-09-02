import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService('https://small-project-api.herokuapp.com');

  return class AuthWrapped extends Component {
    componentWillMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace('/login');
      } else {
        try {
        } catch (err) {
          Auth.logout();
          this.props.history.replace('/login');
        }
      }
    }

    render() {
      return (
        <AuthComponent history={this.props.history} loggedIn={Auth.loggedIn} />
      );
    }
  };
}
