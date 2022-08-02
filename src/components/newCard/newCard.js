import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './newCard.css';

const NewMagicCard = (props) => {
  const {
    id, name, image, convertedManaCost, types,
  } = props;

  const link = 'detail';

  return (
    <article className="card">
      <section id={id} className="cards-section">
        <h2>{name}</h2>
        <h2>
          Type:
          {types}
        </h2>
        <Link to={`/${link}/${id}`}>
          <img className="images" alt="this is a Magic Gathering Card" src={image} />
        </Link>
        <div className="parameter-container">
          <h5 className="parameter-data">{convertedManaCost}</h5>
          <i className="fa-solid fa-flask" />
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
