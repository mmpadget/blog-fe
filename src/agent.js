import superagent from 'superagent'

const API_ROOT = 'http://localhost:3000'

const responseBody = res => res.body

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody)
}

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`)
}

export default {
  Articles
}
