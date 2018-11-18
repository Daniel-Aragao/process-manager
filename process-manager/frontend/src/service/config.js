import axios from 'axios'

export const http = (function(){
  let httpBase = axios.create();

  httpBase.defaults.baseURL = "http://localhost:3000";

  return httpBase;
})();
