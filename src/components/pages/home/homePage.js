import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';
import NewMagicCard from '../../newCard/newCard';

export default function MagicCards() {
  const { cards } = useSelector((state) => state.cards);
  const [cardType, setcardType] = useState();
  const [cardsFiltered, setCardsFiltered] = useState();

  const loadSelector = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/types', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    setcardType(data.types);
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
    loadSelector();
  }, []);

  useEffect(() => {
    setCardsFiltered(cards);
  }, [cards]);

  return (
    <section className="list-of-cards">
      <div className="filter-container">
        <h3>Filter by</h3>
        <select onChange={handlerEvent}>
          <option value="">
            Search by type
          </option>
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
