import React from 'react';
import Types from 'prop-types';

import style from './index.css';

const ImageBox = ({ src, top, left, rotate, scale }) => (
  <div
    className={style.base}
    style={{ top, left }}
  >
    <img
      src={src}
      className={style.img}
      style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
    />
  </div>
);
ImageBox.propTypes = {
  src: Types.string.isRequired,
  top: Types.number.isRequired,
  left: Types.number.isRequired,
  rotate: Types.number.isRequired,
  scale: Types.number.isRequired,
};

export default ImageBox;