import PropTypes from "prop-types";
import styles from "../components/styles/ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={styles.card}>
      <div onClick={onClick}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
