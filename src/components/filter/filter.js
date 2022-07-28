import { useState, useEffect, React } from 'react';
import { useSelector } from 'react-redux';

function Filter() {
  const { cards } = useSelector((state) => state.cards);
  console.log(cards);
  const [creaturesCards, setCreaturesCards] = useState();

  // const creatureType = cards.filter((
  //   card,
  // ) => card.types === 'Instant');

  const handlerEvent = (e) => {
    const filterCard = creaturesCards.filter((card) => card === e.target.value);
    // e.target.value
    console.log(filterCard);
  };

  const loadSelector = async () => {
    const response = await fetch('https://api.magicthegathering.io/v1/types', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    setCreaturesCards(data.types);
  };

  useEffect(() => {
    loadSelector();
  }, []);

  return (
    <div className="filter-container">
      <h3>Filter by</h3>
      <select onChange={handlerEvent}>
        <option value="">
          Search by type
        </option>
        {
          creaturesCards && creaturesCards.map((item) => (
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
  );
}

export default Filter;
