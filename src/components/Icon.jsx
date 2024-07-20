import sprite from '../assets/sprite.svg';
import PropTypes from 'prop-types';

const Iconsvg = ({ width, height, iconName, styles }) => {
  return (
    <svg width={width} height={height} className={styles}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Iconsvg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  iconName: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Iconsvg;
