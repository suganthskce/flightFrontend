
import getSearchResult from './../connector/getSearchResult';
import listingResponse from './../dekorator/listingResponse';
import applyPriceFilter from './../library/applyPriceFilter';
import Constants from './../constants/actions';
import * as R from "ramda";
const then = R.curry((f, p) => p.then(f));

const getHotel = () => {
    return async (dispatch) => {
        dispatch({ type: Constants.SEARCH.FETCHING });
        const response = await R.pipe(getSearchResult, then(listingResponse))();
        dispatch({
            type: Constants.SEARCH.GET_LISTING,
            payload: response
        });
    };
};

const applyFilter = (payload) => {
    return async (dispatch, getState) => {
        const state = getState();
        const { flightListing = {} } = state,
            { masterList = [] } = flightListing;
        const { list = [] } = await R.pipe(applyPriceFilter)({ list: masterList, filterObj: payload });
        dispatch({
            type: Constants.SEARCH.FILTER_LIST,
            payload: list
        });
    };
}


export {
    getHotel, applyFilter
};
