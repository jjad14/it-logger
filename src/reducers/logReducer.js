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
        case types.ADD_LOG:
            return {
                ...state,
                logs: [
                    ...state.logs,
                    action.payload
                ],
                loading: false
            };
        case types.DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload),
                loading: false
            };
        case types.UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => 
                    log.id === action.payload.id ? action.payload : log
                ),
                current: null
            };
        case types.SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
            };
        case types.SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case types.CLEAR_CURRENT:
            return {
                ...state,
                current: null
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