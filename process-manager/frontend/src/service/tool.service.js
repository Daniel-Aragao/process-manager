import { http } from './config'
import catchErrors from './catchErrors.service';

export default {

  list: (cb) => {
    http.get('/tool').then(cb).catch(catchErrors);
  },

  listById: (tool, cb) => {
    http.get('/tool/id/'+tool._id).then(cb).catch(catchErrors);
  },

  add: (tool, cb) => {
    http.post('/tool/add', tool).then(cb).catch(catchErrors);
  },

  remove: (tool, cb) => {
    http.post('/tool/remove', {id: tool._id}).then(cb).catch(catchErrors);
  },

  update: (tool, cb) => {
    http.post('/tool/update', tool).then(cb).catch(catchErrors);
  }

}
