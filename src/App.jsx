import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const accessKey = "CCcxzUrEVpehHhr-iCFv3vHkQ8xPwMmuZ5EqMDRKSxA";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query: searchQuery, page: 1, per_page: 10 },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      setImages(response.data.results);
      setQuery(searchQuery);
      setPage(1);
      setError(null);
    } catch (error) {
      setError("Failed to fetch images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, page: page + 1, per_page: 10 },
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
      setError(null);
    } catch (error) {
      setError("Failed to fetch more images. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />} {}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn onClick={loadMoreImages} />}
      {selectedImage && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <ImageModal image={selectedImage} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;
