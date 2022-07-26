import { useSelector } from 'react-redux';
import NewMagicCard from '../../newCard/newCard';

export default function MagicCards() {
  const { cards } = useSelector((state) => state.cards);
  const cardsList = Object.values(cards);
  return (
    <section className="list-of-cards">
      {
        cardsList.length ? cardsList.map((magicCard) => (
          <NewMagicCard
            key={magicCard.id}
            id={magicCard.id}
            name={magicCard.name}
            image={magicCard.image}
            type={magicCard.type}
            convertedManaCost={magicCard.convertedManaCost}
          />
        )) : <p>Games not found</p>
      }
    </section>
  );
}
