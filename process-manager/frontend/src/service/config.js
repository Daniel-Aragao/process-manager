import axios from 'axios'

export const http = axios.create({
  baseUrl: 'http://localhost:3000/'
})
