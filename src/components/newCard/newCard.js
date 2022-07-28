import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewMagicCard = (props) => {
  const {
    id, types, name, image, convertedManaCost,
  } = props;

  const link = 'detail';

  return (
    <article className="card">
      <section id={id} className="cards-section">
        <h2>{name}</h2>
        <Link to={`/${link}/${id}`}>
          <img className="images" alt="this is a Magic Gathering Card" src={image} />
        </Link>
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
