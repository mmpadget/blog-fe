export default (state = {}, action) => {
  // Handle the home page loaded action in the reducer.
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      // If this case, then modify the state. Take the articles property from the action payload. The articles property is used by the MainView component to display the list of articles.
      return {
        ...state,
        articles: action.payload.articles
      }
    default:
  }

  return state
}
