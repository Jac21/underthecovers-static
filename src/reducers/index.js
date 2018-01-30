import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import tracks from './trackReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  tracks,
  categories
});

export default rootReducer;
