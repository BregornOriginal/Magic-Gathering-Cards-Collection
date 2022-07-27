import { createAsyncThunk } from '@reduxjs/toolkit';

const createCardsList = (obj) => {
  const result = [];

  obj.cards.slice(0, 20).forEach((item) => {
    if (item.imageUrl) {
      result.push({
        convertedManaCost: item.cmc,
        image: item.imageUrl,
        name: item.name,
        type: item.type,
        id: item.id,
      });
    }
  });
  return result;
};

const getCards = createAsyncThunk(
  'card/getCards',
  async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/cards', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createCardsList(data);
  },
);

export default getCards;
