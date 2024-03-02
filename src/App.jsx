import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

const App = () => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (q) => {
    setQuery(q);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery query={query} />
    </div>
  );
};

export default App;
