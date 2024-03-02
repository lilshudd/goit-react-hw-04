import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=YOUR_ACCESS_KEY`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Error fetching images");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.gallery}>
      {images.length > 0 && (
        <ul className={styles.imageList}>
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={loadMoreImages} />}
    </div>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
