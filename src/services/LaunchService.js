import { api, getServiceUrl } from './helper';

const launchService = {
  get: () => api.get(getServiceUrl(`launches/`))
};

export default launchService;
