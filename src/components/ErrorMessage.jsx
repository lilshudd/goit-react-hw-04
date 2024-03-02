import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return <div style={{ color: "red", textAlign: "center" }}>{message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
