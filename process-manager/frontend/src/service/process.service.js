import { http } from './config'

export default {

  list: (cb) => {
    http.get('/process').then(cb);
  },

  add: (process, cb) => {
    http.post('/process/add', process).then(cb);
  }

}
