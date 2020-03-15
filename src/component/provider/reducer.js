
import { SELECTED_PROVIDER, SET_PROVIDER } from './constants';

function providerDetails(state = {
    providers: [],
    providerAttribures:[],
    selectedProvider: '',
}, action) {
    switch (action.type) {
        case SELECTED_PROVIDER:
            return {
                ...state,
                selectedProvider: action.value
            };
        case SET_PROVIDER:
            return {
                ...state,
                providers: action.providers,
                providerAttributes: action.providerAttributes
            };
        default:
            return state;
    }

};

export default providerDetails;
