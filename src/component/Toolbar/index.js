import React from 'react';
import Types from 'prop-types';

import style from './index.css';

import Icon from '../Icon';

const Toolbar = ({ onEnlarge, onShrink, onRotate }) => (
  <div className={style.base}>
    <Icon
      name="plus"
      className={style.icon}
      onClick={onEnlarge}
    />
    <Icon
      name="minus"
      className={style.icon}
      onClick={onShrink}
    />
    <Icon
      name="rotate"
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
