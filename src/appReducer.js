import { combineReducers } from 'redux';
import serviceDetails from './component/service/reducer'
import providerDetails from './component/provider/reducer'

const appReducer = combineReducers({
    serviceDetails,
    providerDetails
});

export default appReducer;