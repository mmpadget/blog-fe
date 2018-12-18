export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      }
    // case 'UPDATE_FIELD_AUTH':
    //   return { ...state, [action.key]: action.value }
    case 'ASYNC_START':
      if (action.subtype === 'LOGIN' || action.subtype === 'REGISTER') {
        return { ...state, inProgress: true }
      }
      break
    // Action will fire when http request starts.
    // case 'ASYNC_START':
    //   if (action.subtype === 'LOGIN') {
    //     return { ...state, inProgress: true }
    //   }
    // return state
    case 'UPDATE_FIELD_AUTH':
      return { ...state, [action.key]: action.value }
    default:
  }
  return state
}
