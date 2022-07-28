import { createAsyncThunk } from '@reduxjs/toolkit';

const createCardsList = (obj) => {
  const result = [];

  obj.cards.slice(0, 50).forEach((item) => {
    if (item.imageUrl) {
      result.push({
        convertedManaCost: item.cmc,
        image: item.imageUrl,
        name: item.name,
        types: item.types[0],
        id: item.id,
        originalText: item.originalText,
        rarity: item.rarity,
        setName: item.setName,
        artist: item.artist,
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
