import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from '../redux/cardAction/cardActions';

const rootReducer = {
  cards: cardsSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
