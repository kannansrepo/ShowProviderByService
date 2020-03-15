import { getProvidersFromAPI } from './fetch'
import { SELECTED_PROVIDER, SET_PROVIDER } from './constants'

export function getProviders() {
    return function (dispatch) {
        return getProvidersFromAPI()
            .then(result => { dispatch(setProviders(result)) })
            .catch(err => { console.log(err) });
    };
};

export const setProviders = providers => ({
    type: SET_PROVIDER,
    providers: providers.data.data,
    providerAttributes: providers.data.included
        .filter(inc => inc.attributes.hasOwnProperty('service'))
        
});

// export const setSelectedService = service => ({
//     type: SELECTED_SERVICE,
//     value: service
// });