/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/combine'; // Correct import

const store = configureStore({
  reducer: rootReducer
});

export default store;
