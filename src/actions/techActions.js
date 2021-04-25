import * as types from './types';

// Get technicians
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: types.GET_TECHS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Add technician
export const addTech = (log) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: types.ADD_TECH,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Delete technician
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        // dispatch(setLoading());

        await fetch(`/techs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: types.DELETE_TECH,
            payload: id
        });
        
    } catch (error) {
        dispatch({
            type: types.TECHS_ERROR,
            payload: error.response.statusText
        });
    }
};

// Set Loading
export const setLoading = () => {
    return {
        type: types.SET_LOADING
    };
};

