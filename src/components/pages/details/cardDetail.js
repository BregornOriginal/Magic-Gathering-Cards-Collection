import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CardDetail() {
  const { id } = useParams();
  const { cards } = useSelector((state) => state.cards);

  let page = 0;

  if (cards.length) {
    cards.forEach((item, index) => {
      if (id === item.id) {
        page = index;
      }
    });
  }

  return (
    <section className="detail-of-card">
      <div>
        <img alt="This should be a Magic Card" src={cards[page].image} />
        <h1>
          Name:
          {cards[page].name}
        </h1>
        <h1>
          Rarity:
          {cards[page].rarity}
        </h1>
        <h1>
          Set Name:
          {cards[page].setName}
        </h1>
        <h1>
          Rarity:
          {cards[page].artist}
        </h1>
        <h1>
          Description:
          {cards[page].originalText}
        </h1>
      </div>
    </section>
  );
}
