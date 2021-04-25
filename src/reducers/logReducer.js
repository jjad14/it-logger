import * as types from '../actions/types';

const initalState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case types.LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;