/* eslint-disable indent */
import users from '../../assets/data/usersData';
import { REGISTER_USER, LOGGED_IN } from '../types/loginTypes';
const initialState = {
  users: users,
  loginuser: ['Sign In']
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      state.users = [...state.users, action.payload];
      return { ...state };
    }
    case LOGGED_IN: {
      state.loginuser = [action.payload];
      return { ...state };
    }

    default:
      return state;
  }
};
export default userReducer;
