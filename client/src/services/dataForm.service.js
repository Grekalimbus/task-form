import axios from 'axios';

const url = 'http://localhost:3000/api';

const dataFormService = {
  post: async (dataForm) => {
    try {
      const data = axios.post(url + '/dataForm', dataForm);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  get: async (dataForm) => {
    try {
      const data = axios.get(url + '/dataForm', dataForm);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

export default dataFormService;
