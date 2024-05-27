import { combineReducers } from 'redux';
import countReducer from './count/reducers';
import personalReducer from './personal/reducers';

const rootReducer = combineReducers({
  count: countReducer,
  personal: personalReducer,
});

export default rootReducer;
