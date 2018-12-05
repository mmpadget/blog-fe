import App from './App';
// import App from './components/App'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import { createStore } from 'redux'
import './index.css';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  appName: 'blog',
  articles: null
}
const reducer = function(state = defaultState, action) {
  return state
}

const store = createStore(reducer)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
