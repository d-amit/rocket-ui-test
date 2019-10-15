import { api, getServiceUrl } from './helper';

const rocketService = {
  get: (rocketId) => api.get(getServiceUrl(`rockets/${rocketId}`))
};

export default rocketService;
