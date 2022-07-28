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
        <img src={cards[page].image} />
        <h1>{cards[page].name}</h1>
        <h1>{cards[page].originalText}</h1>
        <h1>{cards[page].name}</h1>
      </div>
    </section>
  );
}
