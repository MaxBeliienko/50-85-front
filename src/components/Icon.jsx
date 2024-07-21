import sprite from '../assets/sprite.svg';

const Iconsvg = ({ width, height, iconName, styles, onClick }) => {
  return (
    <svg width={width} height={height} className={styles} onClick={onClick}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Iconsvg;
