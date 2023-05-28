import {
  ADD_TO_CART,
  DEL_FROM_CART,
  INC_TO_ITEM,
  DEC_TO_ITEM,
  RESET_CART
} from '../types/productTypes';

export const additemstocart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data
  };
};
export const delItems = (data) => {
  return {
    type: DEL_FROM_CART,
    payload: data
  };
};

export const addSingleInctoItem = (data) => {
  return {
    type: INC_TO_ITEM,
    payload: data
  };
};

export const addSingleDectoItem = (data) => {
  return {
    type: DEC_TO_ITEM,
    payload: data
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART
  };
};
