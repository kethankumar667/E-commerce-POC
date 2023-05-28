import { combineReducers } from 'redux';
import userReducer from './loginReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  login: userReducer,
  products: productReducer
});

export default rootReducer;
