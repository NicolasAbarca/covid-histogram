import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
  GET_DETAIL_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  reports: [],
  detail: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPORTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_REPORTS_SUCCESS:
      return {
        loading: false,
        reports: action.payload,
        error: '',
      };
    case GET_DETAIL_SUCCESS:
      return {
        loading: false,
        reports: action.payload,
        detail: action.payload,
        error: '',
      };
    case GET_REPORTS_FAILURE:
      return {
        loading: false,
        reports: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
