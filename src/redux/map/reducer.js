import {
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE,
} from './types';

const initialState = {
  loading: false,
  maps: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MAP_SUCCESS:
      return {
        loading: false,
        maps: action.payload,
        error: '',
      };
    case GET_MAP_FAILURE:
      return {
        loading: false,
        maps: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default reducer;
