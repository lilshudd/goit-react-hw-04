import PropTypes from "prop-types";
import styles from "../components/styles/ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.modal}>
      <button className={styles.closeBtn} onClick={onClose}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description} />
      {}
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
      <p>Description: {image.description}</p>
    </div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
