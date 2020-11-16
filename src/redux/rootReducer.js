import { combineReducers } from 'redux';
import reportReducer from './report/reducer';
import mapReducer from './map/reducer';

const rootReducer = combineReducers({
  report: reportReducer,
  map: mapReducer,
});

export default rootReducer;
