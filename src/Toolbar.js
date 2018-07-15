import React from 'react';
import Types from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

import { ANIMATION_TIME } from './constant';

const Style = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, .54);
  padding: 10px 20px;
  border-radius: 30px;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  >button{
    margin: 0 5px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all ${ANIMATION_TIME}ms;
    &:hover{
      transform: scale(1.2);
    }
    &:active{
      transform: scale(1.4);
    }
  }
`;

class Toolbar extends React.Component {
  static propTypes = {
    onEnlarge: Types.func.isRequired,
    onShrink: Types.func.isRequired,
    onRotate: Types.func.isRequired,
  }

  render() {
    const {
      onEnlarge,
      onShrink,
      onRotate,
    } = this.props;
    return (
      <Style>
        <button type="button" onClick={onEnlarge}>
          <Icon name="plus" />
        </button>
        <button type="button" onClick={onShrink}>
          <Icon name="minus" />
        </button>
        <button type="button" onClick={onRotate}>
          <Icon name="rotate" />
        </button>
      </Style>
    );
  }
}

export default Toolbar;
