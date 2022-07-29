import { createSlice } from '@reduxjs/toolkit';
import getCards from '../data-api/magicCards-api';

const initialState = {
  cards: [],
  status: null,
};

const cardsSlice = createSlice({
  name: 'card',
  initialState,
  extraReducers: {
    [getCards.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getCards.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      cards: action.payload,
    }),
    [getCards.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const getCard = cardsSlice.actions;
export default cardsSlice;
