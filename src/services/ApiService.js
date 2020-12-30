import * as Axios from 'axios'
const axios = Axios.default

const url = 'https://api.themoviedb.org/3'
const params = {
  api_key: '525717d8168ac159276e156507c56f6d',
  language: 'en-US'
}

export const find = (title, page = 1) =>
  axios.get(`${url}/search/movie`, {
    params: {
      ...params,
      include_adult: 'false',
      page,
      query: title
    }
  })
