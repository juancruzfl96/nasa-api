import PropTypes from "prop-types";

const NoPhotos = ({ text }) => {
  return <h2 data-testid='no-photos'>{text}</h2>;
};

NoPhotos.propTypes = {
  text: PropTypes.string,
};
export default NoPhotos;
