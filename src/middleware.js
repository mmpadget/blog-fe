// Check if action.payload is a promise.
const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
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
        // Set the action's payload to the error that occured.
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

// This middleware is plugged into the redux store.
export {
  promiseMiddleware
}
