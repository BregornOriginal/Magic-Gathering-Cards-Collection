import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../redux/cardActions';

const rootReducer = {
  cards: cardsSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
