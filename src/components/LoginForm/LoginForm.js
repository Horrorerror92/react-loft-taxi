import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getAuthorized } from '../../modules/Auth';
import LoginLayout from '../LoginLayout';

const validTrue = ({ login , password }) => {
  
  const errors = {};

  if (login !== 'test@test.com' ) {
    errors.login  = 'Неверный логин';
  }
  if (password !== '123123') {
    password.login = 'Неверный пароль';
  }
  return errors;

}



class LoginForm extends Component {
    render () {
        const { isAuthorized } = this.props;

        return isAuthorized ? (
            <Redirect to="/map" />
        ) : (
          <LoginLayout />
        );
    }
}

const mapStateToProps = state => ({
  isAuthorized: getAuthorized(state),
});

const mapDispatchToProps = { login };

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
