// Action Creators

import * as types from '../actions/actions.js';

export const getCartActionCreator = cartData => ({
  type: types.GET_CART,
  payload: cartData
});

export const addItemtoCartActionCreator = item => ({
  type: types.ADD_ITEM_TO_CART,
  payload: item
});

export const addItemToCartSuccessActionCreator = (cartId) => ({
  type: types.ADD_ITEM_TO_CART_SUCCESS,
  payload: cartId
});


