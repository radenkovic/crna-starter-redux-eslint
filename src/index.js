import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Store';
import Routes from './Router';
import './Styles/main.scss';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
