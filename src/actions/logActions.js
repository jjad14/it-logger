import * as types from './types';

// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: types.GET_LOGS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.data
        });
    }
};

// Add New Log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: types.ADD_LOG,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.data
        });
    }
};

export const setLoading = () => {
    return {
        type: types.SET_LOADING
    };
};

