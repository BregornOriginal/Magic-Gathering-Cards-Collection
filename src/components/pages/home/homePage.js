import { useSelector } from 'react-redux';
import NewMagicCard from '../../newCard/newCard';
import Filter from '../../filter/filter';

export default function MagicCards() {
  const { cards } = useSelector((state) => state.cards);

  return (
    <section className="list-of-cards">
      <Filter />
      {
        cards.length ? cards.map((magicCard) => (
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
