import { combineReducers } from 'redux';
import reportReducer from './report/reducer';
import detailReducer from './detail/reducer';

const rootReducer = combineReducers({
  report: reportReducer,
  detail: detailReducer,
});

export default rootReducer;
