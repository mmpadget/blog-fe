import superagent from 'superagent'

// const API_ROOT = 'https://conduit.productionready.io/api'
// Start the back-end server first. The front-end uses port 3001 for local development.
const API_ROOT = 'http://localhost:3000/api'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
}

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
}

const Auth = {
  // Return a get-request to the user route. Fetch the currently logged-in user.
  current: () =>
    requests.get('/user'),
  login: (email, password) => {
    requests.post('/users/login', { user: { email, password } })
  }
}

// Create a token variable.
let token = null
// Token plugin to always set the token.
let tokenPlugin = req => {
  // If token, set the authorization header.
  if (token) {
    // Auth header is how the production server knows which user is logged in.
    req.set('authorization', `Token ${token}`)
  }
}

export default {
  Articles,
  Auth,
  // Export a set token function that will take in a token and set the local token variable to the provided token.
  setToken: _token => { token = _token }
}
