import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from './types';

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response,
    });
  }
};

// Get logs from server
export const addLog = (log) => async (dispatch) => {
  console.log('oiii')
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log("addLog -> data", data)
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
