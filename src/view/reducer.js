import { combineReducers } from 'redux';
import { addCountReducer } from './count/reducer';
import { employeeReducer } from './employee/reducer';

export default combineReducers({
  addCountReducer,
  employeeReducer,
});
