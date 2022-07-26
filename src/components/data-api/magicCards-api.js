import { createAsyncThunk } from '@reduxjs/toolkit';

const createCardsList = (obj) => {
  let result = {};

  obj.cards.slice(0, 20).forEach((item) => {
    let name = null;
    let image = null;
    let id = null;
    let type = null;
    let convertedManaCost = null;

    if (item.imageUrl) image = item.imageUrl;
    if (item.name) name = item.name;
    if (item.id) id = item.id;
    console.log(item.imageUrl);
    if (item.type) type = item.type;
    if (item.cmc) convertedManaCost = item.cmc;

    result = {
      ...result,
      [item.id]:
      {
        name,
        image,
        id,
        type,
        convertedManaCost,
      },
    };
    console.log(result);
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
    console.log(data);
    return createCardsList(data);
  },
);

export default getCards;
