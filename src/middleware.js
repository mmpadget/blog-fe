import agent from './agent'

// Check if action.payload is a promise.
const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    // Dispatch async start action when an async action starts
    store.dispatch({ type: 'ASYNC_START', subtype: action.type })
    // Wait for promise to resolve.
    action.payload.then(
      res => {
        action.payload = res
        // Dispatch the action after overwriting the payload with the result of the promise when successfully resolved.
        store.dispatch(action)
      },
      error => {
        // If the promise is rejected, set actions error property to true.
        action.error = true
        // Set the action's payload to the error that occured. If the back-end is not available the error will be, "Unhandled Rejection (TypeError): Cannot read property 'body' of undefined."
        action.payload = error.response.body
        // Dispatch the transformed action.
        store.dispatch(action)
      }
    )
    // Otherwise, do nothing with the action.
    return
  }

  // How you pass control to the next middleware in the chain. Since we don't have anymore middleware, next will trigger the reducer. If the action's payload is a promise, we don't call next; we dispatch a new action.
  next(action)
}

function isPromise(v) {
  return v && typeof v.then === 'function'
}

// If the user closes the window, persist the token using local storage.
const localStorageMiddleware = store => next => action => {
  if (action.type === 'REGISTER' || action.type === 'LOGIN') {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token)
      // Tell the agent what the token is.
      agent.setToken(action.payload.user.token)
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '')
    agent.setToken(null)
  }

  next(action)
}

// This middleware is plugged into the redux store.
export {
  localStorageMiddleware,
  promiseMiddleware
}
