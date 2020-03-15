import { simpleRequest } from '../../util/ApiUtil'
import { PROVIDER_URL } from '../../Endpoint'

export const getProvidersFromAPI = () => {
  return simpleRequest({
    url: PROVIDER_URL,
    method: 'GET'
  });
};

