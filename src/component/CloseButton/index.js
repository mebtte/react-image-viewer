import React from 'react';
import Types from 'prop-types';

import style from './index.css';

import Icon from '../Icon';

const CloseButton = ({ onClose }) => (
  <button
    className={style.base}
    onClick={onClose}
  >
    <Icon name="close" className={style.icon} />
  </button>
);
CloseButton.propTypes = {
  onClose: Types.func.isRequired,
};

export default CloseButton;
