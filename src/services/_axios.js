import axios from 'axios';

let instance = axios.create();

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
	if (error.response.status === 401) {
		window.location.href = '/login';
	}
  return Promise.reject(error.response.data);
});

export default instance;
