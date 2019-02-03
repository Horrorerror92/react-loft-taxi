import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Router from './components/Router';
import { Provider } from 'react-redux';
import createAppStore from './store';

const store = createAppStore();

ReactDOM.render(
 
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
  
);

