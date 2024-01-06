import * as types from '../constants/actionTypes';

const initialState = {
  theCart: [],
  itemsinCart: 0,
  cartId: null
};

const cartReducer = (state = initialState, action) => {
  let theCart;

  switch (action.type) {
  case types.GET_CART: {
    theCart = state.theCart.slice();
    theCart.push(action.payload);
    console.log('log coming from the reducer', theCart[0]);
    const itemsinCart = theCart[0].length;

    return {
      ...state,
      theCart,
      itemsinCart

    };
  }

  case types.ADD_ITEM_TO_CART:{
    const itemsinCart = state.itemsinCart + 1;
    return {
      ...state,
      itemsinCart
    };
  }

  case types.ADD_ITEM_TO_CART_SUCCESS:{
    const cartId = action.payload;
    if (cartId !== '') {
      return {
        ...state,
        cartId
      };
    }
    return state;
  }

  default: {
    return state;
  }
  }
};

export default cartReducer;
