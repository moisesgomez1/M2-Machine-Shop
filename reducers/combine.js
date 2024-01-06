/**
 * ************************************
 *
 * @module  combine.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

// combine.js

import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;
