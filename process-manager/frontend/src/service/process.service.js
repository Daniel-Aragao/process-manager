import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list: (cb) => {
    http.get('/process').then(cb).catch(catchErrors);
  },

  add: (process, cb) => {
    http.post('/process/add', process).then(cb).catch(catchErrors);
  },

  remove: (process, cb) => {
    http.post('/process/remove', {id: process._id}).then(cb).catch(catchErrors);
  }

}
