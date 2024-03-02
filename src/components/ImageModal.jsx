import PropTypes from "prop-types";
import Modal from "react-modal";

const ImageModal = ({ isOpen, image, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {}
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ImageModal;
