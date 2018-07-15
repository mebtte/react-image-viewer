import React from 'react';
import Types from 'prop-types';
import styled from 'styled-components';

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

const Style = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  >.icon{
    width: 100%;
    user-select: none;
    user-drag: none;
  }
`;

class Icon extends React.PureComponent {
  static propTypes = {
    name: Types.oneOf(Object.keys(NAME_MAP_SVG)).isRequired,
    size: Types.number,
  }

  static defaultProps = {
    size: 24,
  }

  render() {
    const { name, size, ...props } = this.props;
    return (
      <Style size={size} {...props}>
        <img className="icon" src={NAME_MAP_SVG[name]} alt={`icon ${name}`} />
      </Style>
    );
  }
}

export default Icon;
