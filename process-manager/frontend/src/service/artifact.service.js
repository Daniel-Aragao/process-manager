import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list:(cb) => {
    http.get('/artifact').then(cb).catch(catchErrors);
  },

  findtById:(artifact, cb) => {
    http.get('/artifact/id/'+artifact._id).then(cb).catch(catchErrors);
  },

  add: (artifact, cb) => {
    http.post('/artifact/add', artifact).then(cb).catch(catchErrors);
  },

  remove: (artifact, cb) => {
    http.post('/artifact/remove', {id: artifact._id}).then(cb).catch(catchErrors);
  },

  update: (artifact, cb) => {
    http.post('/artifact/update', artifact).then(cb).catch(catchErrors);
  }
}
