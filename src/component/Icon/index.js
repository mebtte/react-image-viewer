import React from 'react';
import Types from 'prop-types';

import style from './index.css';

import SvgClose from './close.svg';
import SvgLoading from './loading.svg';
import SvgMeh from './meh.svg';
import SvgMinus from './minus.svg';
import SvgPlus from './plus.svg';
import SvgRotate from './rotate.svg';
import SvgDrag from './drag.svg';

const NAME_MAP_SVG = {
  close: SvgClose,
  loading: SvgLoading,
  meh: SvgMeh,
  minus: SvgMinus,
  plus: SvgPlus,
  rotate: SvgRotate,
  drag: SvgDrag,
};

class Icon extends React.PureComponent {
  static propTypes = {
    name: Types.oneOf(Object.keys(NAME_MAP_SVG)).isRequired,
    size: Types.number,
    className: Types.string,
  }

  static defaultProps = {
    size: 24,
    className: '',
  }

  render() {
    const { name, size, className, ...props } = this.props;
    return (
      <div
        className={`${style.box} ${className}`}
        style={{
          width: size,
          height: size,
        }}
        {...props}
      >
        <img
          className={style.icon}
          src={NAME_MAP_SVG[name]}
          alt={`icon ${name}`}
        />
      </div>
    );
  }
}

export default Icon;
