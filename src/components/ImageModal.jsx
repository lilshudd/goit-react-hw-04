import PropTypes from "prop-types";
import Modal from "react-modal";
import styles from "../components/styles/ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={styles["modal-content"]}
      overlayClassName={styles.overlay}
    >
      <div className={styles["modal-body"]} onClick={onClose}>
        <img src={image.urls.regular} alt={image.alt_description} />
        {}
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <p>Description: {image.description}</p>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  image: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageModal;
