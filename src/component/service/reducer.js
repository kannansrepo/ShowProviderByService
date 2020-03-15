
import { SELECTED_SERVICE, SET_SERVICES } from './constants';

function serviceDetails(state={services: [],
    selectedService:'',
}, action) {
    switch (action.type) {
        case SELECTED_SERVICE:
            return {
                ...state,
                selectedService: action.value
            };
        case SET_SERVICES:
            return {
                ...state,
                services:action.services
            }
        default:
            return state;
    }

};

export default serviceDetails;
