/* eslint-disable quotes */
/* eslint-disable indent */
import {
  ADD_TO_CART,
  DEL_FROM_CART,
  INC_TO_ITEM,
  DEC_TO_ITEM,
  RESET_CART
} from '../types/productTypes';

const initialState = {
  cartData: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = state.cartData.findIndex((object) => {
        return object.id === action.payload.id;
      });
      if (index < 0) {
        state.cartData = [...state.cartData, action.payload];
      } else if (index >= 0) {
        const newArray = [...state.cartData];
        newArray[index].count = newArray[index].count + action.payload.count;
      }
      return {
        ...state
      };
    }
    case DEL_FROM_CART: {
      const filterstate = state.cartData.filter((DATA) => DATA.id !== action.payload.id && DATA);
      state.cartData = filterstate;
      return {
        ...state
      };
    }
    case INC_TO_ITEM: {
      const index = state.cartData.findIndex((object) => {
        return object.id === action.payload.id;
      });
      const newArray = [...state.cartData];
      newArray[index].count = newArray[index].count + 1;

      return {
        ...state
      };
    }
    case DEC_TO_ITEM: {
      const index = state.cartData.findIndex((object) => {
        return object.id === action.payload.id;
      });
      const newArray = [...state.cartData];
      newArray[index].count > 0
        ? (newArray[index].count = newArray[index].count - 1)
        : newArray[index].count;

      return {
        ...state
      };
    }
    case RESET_CART: {
      state.cartData = [];
      return { ...state };
    }
    default:
      return state;
  }
};
export default productReducer;
