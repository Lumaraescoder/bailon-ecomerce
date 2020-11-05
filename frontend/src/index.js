import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import Home from './screens/home/index'

ReactDOM.render(
  <Provider store={store}>
    <Home />
    {/* <App /> */}
  </Provider>, document.getElementById('root'));

