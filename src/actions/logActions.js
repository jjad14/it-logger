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
            payload: error.response.statusText
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
            payload: error.response.statusText
        });
    }
};

// Delete log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: types.DELETE_LOG,
            payload: id
        });
        
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Update log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: types.UPDATE_LOG,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Search Logs
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: types.SEARCH_LOGS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.LOGS_ERROR,
            payload: error.response.statusText
        });
    }  
};

// Set Current log
export const setCurrent = log => {
    return {
        type: types.SET_CURRENT,
        payload: log
    };
};

// Clear Current log
export const clearCurrent = () => {
    return {
        type: types.CLEAR_CURRENT
    };
};

export const setLoading = () => {
    return {
        type: types.SET_LOADING
    };
};

