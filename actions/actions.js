// Action Creators

import * as types from '../constants/actionTypes';

export const getCartActionCreator = cartData => ({
  type: types.GET_CART,
  payload: cartData
});

export const addItemtoCartActionCreator = item => ({
  type: types.ADD_ITEM_TO_CART,
  payload: item
});
