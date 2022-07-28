import PropTypes from 'prop-types';

const NewMagicCard = (props) => {
  const {
    id, types, name, image, convertedManaCost,
  } = props;

  return (
    <article className="card">
      <section id={id} className="cards-section">
        <h2>{name}</h2>
        <img className="images" alt="this is a Magic Gathering Card" src={image} />
        <div className="card-description">
          <h4>{types}</h4>
          <h5>{convertedManaCost}</h5>
        </div>
      </section>
    </article>
  );
};

NewMagicCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  convertedManaCost: PropTypes.number.isRequired,
};

export default NewMagicCard;
