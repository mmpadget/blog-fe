import { applyMiddleware, createStore, combineReducers } from 'redux'

import { promiseMiddleware, localStorageMiddleware } from './middleware'
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'
import settings from './reducers/settings'

const reducer = combineReducers({
  auth,
  common,
  home,
  settings
})

// Use applyMiddleware from redux to create middleware when we create the store.
const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware)

const store = createStore(reducer, middleware)

export default store
