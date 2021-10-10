import Constants from '../constants/actions';

const _defaultState = {
    fetching: false,
    masterList: [],
    filterObj: {},
    filterdList: [],
};

const listReducer = (state = _defaultState, action) => {
    try {
        const { type, payload } = action;
        switch (type) {
            case Constants.SEARCH.GET_LISTING: {
                return {
                    ...state,
                    ...payload,
                    fetching: false,
                }
            }
            case Constants.SEARCH.FETCHING: {
                return {
                    ...state,
                    fetching: true,
                    masterList: [],
                    filterObj: {}
                }
            }
            case Constants.SEARCH.FILTER_LIST: {
                return {
                    ...state,
                    filterdList: payload,
                }
            }
            default:
                return state;
        }
    } catch (error) {
        return _defaultState;
    }
};

export default listReducer;
