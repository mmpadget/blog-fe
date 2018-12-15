import superagent from 'superagent'

// const API_ROOT = 'https://conduit.productionready.io/api'
// Start the back-end server first. The front-end uses port 3001 for local development.
const API_ROOT = 'http://localhost:3000/api'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody)
}

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
}

const Auth = {
  login: (email, password) => {
    requests.post('/users/login', { user: { email, password } })
  }
}

export default {
  Articles,
  Auth
}
