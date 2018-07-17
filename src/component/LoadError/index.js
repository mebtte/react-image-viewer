import React from 'react';
import Types from 'prop-types';

import style from './index.css';

import Icon from '../Icon';

const LoadError = ({ reload }) => (
  <div className={style.base}>
    <Icon name="meh" size={48} />
    <Icon
      name="rotate"
      className={style.reload}
      onClick={reload}
    />
  </div>
);
LoadError.propTypes = {
  reload: Types.func.isRequired,
};

export default LoadError;
