import React ,  { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm';


class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/login' component = { LoginForm } />
          <Redirect from = '*' to = '/login' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
