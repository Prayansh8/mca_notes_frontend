// src/redux/actions.js
import axios from 'axios';
import {
  API_ENDPOINT,
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from './constants';

export const fetchSubjectsRequest = () => ({
  type: FETCH_SUBJECTS_REQUEST,
});

export const fetchSubjectsSuccess = (data) => ({
  type: FETCH_SUBJECTS_SUCCESS,
  payload: data,
});

export const fetchSubjectsFailure = (error) => ({
  type: FETCH_SUBJECTS_FAILURE,
  payload: error,
});

export const fetchSubjectsData = () => {
  return async (dispatch) => {
    dispatch(fetchSubjectsRequest());
    try {
      const response = await axios.get(API_ENDPOINT);
      const data = response.data;
      dispatch(fetchSubjectsSuccess(data));
    } catch (error) {
      dispatch(fetchSubjectsFailure(error));
    }
  };
};
