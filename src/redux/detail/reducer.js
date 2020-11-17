import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE,
} from './types';

const initialState = {
  loading: false,
  detail: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_SUCCESS:
      return {
        loading: false,
        detail: action.payload.data,
        error: '',
      };
    case GET_DETAIL_FAILURE:
      return {
        loading: false,
        detail: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
