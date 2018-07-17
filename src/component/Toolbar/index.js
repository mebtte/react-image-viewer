import React from 'react';
import Types from 'prop-types';

import style from './index.css';

import Icon from '../SvgIcon';

const Toolbar = ({ onEnlarge, onShrink, onRotate }) => (
  <div className={style.base}>
    <Icon
      name="plus"
      size={32}
      className={style.icon}
      onClick={onEnlarge}
    />
    <Icon
      name="minus"
      size={32}
      className={style.icon}
      onClick={onShrink}
    />
    <Icon
      name="rotate"
      size={32}
      className={style.icon}
      onClick={onRotate}
    />
  </div>
);
Toolbar.propTypes = {
  onEnlarge: Types.func.isRequired,
  onShrink: Types.func.isRequired,
  onRotate: Types.func.isRequired,
};

export default Toolbar;
