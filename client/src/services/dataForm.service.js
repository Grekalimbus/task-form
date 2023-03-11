import { toast } from 'react-toastify';
import axios from 'axios';

const url = 'http://localhost:3000/api';

const post = async (dataForm) => {
  try {
    const data = axios.post(url + '/dataForm', dataForm);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const get = async (dataForm) => {
  try {
    const data = axios.post(url + '/dataForm', dataForm);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const dataFormService = {
  post,
  get,
};
