import PropTypes from "prop-types";
import styles from "../components/styles/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles["load-more-container"]}>
      <button className={styles.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
