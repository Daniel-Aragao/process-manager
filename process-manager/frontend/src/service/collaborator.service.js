import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list:(cb) => {
    http.get('/collaborator').then(cb).catch(catchErrors);
  },

  findtById:(collaborator, cb) => {
    http.get('/collaborator/id/'+collaborator._id).then(cb).catch(catchErrors);
  },

  add: (collaborator, cb) => {
    http.post('/collaborator/add', collaborator).then(cb).catch(catchErrors);
  },

  remove: (collaborator, cb) => {
    http.post('/collaborator/remove', {id: collaborator._id}).then(cb).catch(catchErrors);
  },

  update: (collaborator, cb) => {
    http.post('/collaborator/update', collaborator).then(cb).catch(catchErrors);
  }
}
