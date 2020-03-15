import {simpleRequest} from '../../util/ApiUtil'
import {SERVICE_URL} from '../../Endpoint'


export const getServicesFromAPI = () => {
    return simpleRequest({
      url: SERVICE_URL,
      method: 'GET'
    });
  };

  