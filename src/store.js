import { applyMiddleware, createStore, combineReducers } from 'redux'

import { localStorageMiddleware, promiseMiddleware } from './middleware'
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'

const reducer = combineReducers({
  auth,
  common,
  home
})

// Use applyMiddleware from redux to create middleware when we create the store.
const middleware = applyMiddleware(promiseMiddleware, localStorageMiddleware)
const store = createStore(reducer, middleware)

export default store
