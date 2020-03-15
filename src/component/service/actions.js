import { getServicesFromAPI } from './fetch'
import { SELECTED_SERVICE, SET_SERVICES } from './constants'

export function getServices(){
    return function (dispatch) {
        return getServicesFromAPI()
            .then(result => {dispatch(setServices(result.data))})
            .catch(err => {console.log(err)});
    };
};

export const setServices = services => ({
    type: SET_SERVICES,
    services: services.data
});

export const setSelectedService = service => ({
    type: SELECTED_SERVICE,
    value: service
});