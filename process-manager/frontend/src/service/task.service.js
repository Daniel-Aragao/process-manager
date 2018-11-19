import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list: (cb) => {
    http.get('/task').then(cb).catch(catchErrors);
  },

  listById: (task, cb) => {
    http.get('/task/id/'+task._id).then(cb).catch(catchErrors);
  },

  add: (task, cb) => {
    http.post('/task/add', task).then(cb).catch(catchErrors);
  },

  remove: (task, cb) => {
    http.post('/task/remove', {id: task._id}).then(cb).catch(catchErrors);
  },

  update: (task, cb) => {
    http.post('/task/update', task).then(cb).catch(catchErrors);
  }

}
