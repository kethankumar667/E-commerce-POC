import { REGISTER_USER, LOGGED_IN } from '../types/loginTypes';

export const registeruser = (data) => {
  return {
    type: REGISTER_USER,
    payload: data
  };
};

export default registeruser;
export const login = (data) => {
  return {
    type: LOGGED_IN,
    payload: data
  };
};
