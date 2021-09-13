import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;
const axiosGet = async (url) => {
  try {
    return await axios.get(`${base_url}/${url}`);
  } catch (error) {
    throw error.response.data;
  }
};


export { axiosGet };
