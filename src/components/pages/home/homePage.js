import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';
import NewMagicCard from '../../newCard/NewCard';

export default function MagicCards() {
  const { cards } = useSelector((state) => state.cards);
  const [cardType, setcardType] = useState([]);
  const [cardsFiltered, setCardsFiltered] = useState([]);
  // console.log(cards);

  const loadSelector = (typeOfCards) => {
    const types = {};

    typeOfCards.map((item) => {
      if (!types[item.types]) {
        types[item.types] = item.types;
      }
    });
    setcardType(Object.keys(types));
    console.log(types);
  };

  const handlerEvent = (e) => {
    if (e.target.value !== '') {
      const filterCard = cards.filter((card) => card.types === e.target.value);
      setCardsFiltered(filterCard);
    } else {
      setCardsFiltered(cards);
    }
  };

  // useEffect(() => {
  //   loadSelector();
  // }, []);

  useEffect(() => {
    setCardsFiltered(cards);
    loadSelector(cards);
  }, [cards]);

  return (
    <section className="list-of-cards">
      <div className="filter-container">
        <h3>Filter by</h3>
        <select onChange={handlerEvent}>
          <option value="">
            Search by type
          </option>
          {cardType.length}
          {
            cardType && cardType.map((item) => (
              <option
                value={item}
                key={item}
              >
                {item}
              </option>
            ))
          }
        </select>
      </div>
      {
        cardsFiltered ? cardsFiltered.map((magicCard) => (
          <NewMagicCard
            key={magicCard.id}
            id={magicCard.id}
            name={magicCard.name}
            image={magicCard.image}
            types={magicCard.types}
            convertedManaCost={magicCard.convertedManaCost}
          />
        )) : <p>Cards not found</p>
      }
    </section>
  );
}
