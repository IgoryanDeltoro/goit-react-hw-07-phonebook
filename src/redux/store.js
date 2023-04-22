import { contactsReducer } from './contactsSplice';
import { filtersReducer } from './filtersSplice';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  phoneBook: contactsReducer,
  filter: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
