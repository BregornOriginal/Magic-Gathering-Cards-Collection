import PropTypes from 'prop-types';

const NewMagicCard = (props) => {
  const {
    id, type, name, image, convertedManaCost,
  } = props;

  return (
    <article className="card">
      <section id={id} className="cards-section">
        <h2>{name}</h2>
        <img className="images" alt="this is a magicGatheringCard" src={image} />
        <div className="card-description">
          <h4>{type}</h4>
          <h5>{convertedManaCost}</h5>
        </div>
      </section>
    </article>
  );
};

NewMagicCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  convertedManaCost: PropTypes.number.isRequired,
};

export default NewMagicCard;
