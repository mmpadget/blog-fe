import superagent from 'superagent'

// const API_ROOT = 'https://conduit.productionready.io/api'
const API_ROOT = 'http://localhost:3000/api'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
}

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
    // requests.get('/articles?limit=10')
}

export default {
  Articles
}
