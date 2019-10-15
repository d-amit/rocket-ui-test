import axios from 'axios';

const api = axios.create();

const getServiceUrl = (pathname) => {
  const SERVICES_URL = 'https://api.spacexdata.com/v3';
  return `${SERVICES_URL}/${pathname}`;
};

export {
  api,
  getServiceUrl
};