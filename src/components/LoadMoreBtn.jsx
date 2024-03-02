import PropTypes from "prop-types";

const LoadMoreBtn = ({ onLoadMore }) => {
  return <div style={{ textAlign: "center", margin: "20px" }}>{}</div>;
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
