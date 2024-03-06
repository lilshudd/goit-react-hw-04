import PropTypes from "prop-types";
import ImageCard from "./ImageCard";
import ErrorMessage from "./ErrorMessage";
import styles from "../components/styles/ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return <ErrorMessage message="No images found" />;
  }

  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
