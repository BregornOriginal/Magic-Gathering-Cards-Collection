import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';
import NewMagicCard from '../../newCard/NewCard';
import './homePage.css';

export default function MagicCards() {
  const { cards } = useSelector((state) => state.cards);
  const [cardType, setcardType] = useState([]);
  const [cardsFiltered, setCardsFiltered] = useState([]);

  const loadSelector = (typeOfCards) => {
    const types = {};

    typeOfCards.map((item) => {
      if (!types[item.types]) {
        types[item.types] = item.types;
      }
      return setcardType(Object.keys(types));
    });
  };

  const handlerEvent = (e) => {
    if (e.target.value !== '') {
      const filterCard = cards.filter((card) => card.types === e.target.value);
      setCardsFiltered(filterCard);
    } else {
      setCardsFiltered(cards);
    }
  };

  useEffect(() => {
    setCardsFiltered(cards);
    loadSelector(cards);
  }, [cards]);

  return (
    <>
      <div className="filter-container">
        <h3>Filter by</h3>
        <select className="select" onChange={handlerEvent}>
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
      <section className="list-of-cards">
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
    </>
  );
}
