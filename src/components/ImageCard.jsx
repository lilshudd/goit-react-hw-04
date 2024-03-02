import PropTypes from "prop-types";

const ImageCard = ({ image }) => {
  return (
    <li>
      <div>
        <img src={image.urls.small} alt={image.alt_description || ""} />
      </div>
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
