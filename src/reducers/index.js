import { combineReducers } from 'redux';
import ReducerItems from './reducer_items';

const rootReducer = combineReducers({
  text: ReducerItems
});

export default rootReducer;
