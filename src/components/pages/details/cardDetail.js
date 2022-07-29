import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './cardDetail.css';

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
      <div className="detail-container">
        <h4>
          Name:
          {cards[page].name}
        </h4>
        <h4>
          Rarity:
          {cards[page].rarity}
        </h4>
        <img className="images" alt="This should be a Magic Card" src={cards[page].image} />
        <h4>
          Set Name:
          {cards[page].setName}
        </h4>
        <h4>
          Rarity:
          {cards[page].artist}
        </h4>
        <p className="description">
          Description:
          {cards[page].originalText}
        </p>
      </div>
    </section>
  );
}
