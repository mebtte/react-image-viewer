import React from 'react';
import Types from 'prop-types';
import styled from 'styled-components';

import { FadeIn } from './keyframes';
import { ANIMATION_TIME } from './constant';

const Style = styled.div`
  position: absolute;
  animation: ${FadeIn} ${ANIMATION_TIME}ms;
  ${({ top, left }) => `
    left: ${left}px;
    top: ${top}px;
  `}
`;
const Img = styled.img`
  transition: all ${ANIMATION_TIME}ms;
  ${({ rotate, scale }) => `
    transform: scale(${scale}) rotate(${rotate}deg);
  `}
`;

class ImageBox extends React.PureComponent {
  static propTypes = {
    src: Types.string.isRequired,
    left: Types.number.isRequired,
    top: Types.number.isRequired,
    rotate: Types.number.isRequired,
    scale: Types.number.isRequired,
  }

  render() {
    const {
      src,
      left,
      top,
      rotate,
      scale,
    } = this.props;
    return (
      <Style left={left} top={top}>
        <Img src={src} rotate={rotate} scale={scale} />
      </Style>
    );
  }
}

export default ImageBox;
