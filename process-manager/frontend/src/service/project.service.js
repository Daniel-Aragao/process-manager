import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list: (cb) => {
    http.get('/project').then(cb).catch(catchErrors);
  },

  listById: (project, cb) => {
    http.get('/project/id/'+project._id).then(cb).catch(catchErrors);
  },

  add: (project, cb) => {
    http.post('/project/add', project).then(cb).catch(catchErrors);
  },

  remove: (project, cb) => {
    http.post('/project/remove', {id: project._id}).then(cb).catch(catchErrors);
  },

  update: (project, cb) => {
    http.post('/project/update', project).then(cb).catch(catchErrors);
  }

}
