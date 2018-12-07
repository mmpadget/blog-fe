import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
// import './index.css'
import * as serviceWorker from './serviceWorker'
import { promiseMiddleware } from './middleware'

const defaultState = {
  appName: 'blog',
  articles: null
}
const reducer = function(state = defaultState, action) {
  // Handle the home page loaded action in the reducer.
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      // If this case, then modify the state. Take the articles property from the action payload. The articles property is used by the MainView component to display the list of articles.
      return { ...state, articles: action.payload.articles }
    default: console.error()
  }
  return state
}

// Use applyMiddleware from redux to create middleware when we create the store.
const store = createStore(reducer, applyMiddleware(promiseMiddleware))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
