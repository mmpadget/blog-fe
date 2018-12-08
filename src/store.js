import { applyMiddleware, createStore } from 'redux'

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
const middleware = applyMiddleware(promiseMiddleware)
const store = createStore(reducer, middleware)

export default store
