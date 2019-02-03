import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/Auth';
import getAuthorized from '../../modules/Auth';
import { Redirect } from 'react-router-dom';


class LoginForm extends Component {
  render() {
    const { isAuthorized } = this.props;
    console.log(this.props);
    return isAuthorized  
      ? ( <Redirect to = '/map' /> )
      : (
        <div>123</div>
    ); 
  }
}

const mapStateToProps = state => ( {
  isAuthorized : getAuthorized(state),
});

const mapDispatchToProps = { login };

export default compose (
  connect (mapStateToProps, mapDispatchToProps))(LoginForm);
