import { http } from './config'

export default {

  listAll:() => {
    return http.get('artifacts');
  },

  listById:(id) => {
    return http.post(id);
  },

  listByProcess:(process) => {
    return http.get(process);
  },

  add:(artifact) => {
    return http.post(artifact);
  },

  remove:(artifact) => {
    return http.post(artifact);
  },

  update:(artifact) => {
    return http.post(artifact);
  }

}
