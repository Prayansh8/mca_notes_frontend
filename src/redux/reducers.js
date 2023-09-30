// src/redux/reducer.js
import {
  FETCH_SUBJECTS_REQUEST,
  FETCH_SUBJECTS_SUCCESS,
  FETCH_SUBJECTS_FAILURE,
} from "./constants";

const initialState = {
  subjectData: [],
  isLoading: false,
  error: null,
};

const subjectDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjectData: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_SUBJECTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default subjectDataReducer;
