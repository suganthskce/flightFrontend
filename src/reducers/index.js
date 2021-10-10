import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import flightListing from './listingReducer';

const storeConfig = {
    key: 'hotel',
    debug: false,
    storage: storage,
    whitelist: []
};

const rootReducer = persistReducer(storeConfig, combineReducers({
    flightListing,
}));

export default rootReducer;
