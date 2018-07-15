import React from 'react';
import Types from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

import { ANIMATION_TIME } from './constant';

const iconStyle = {
  position: 'absolute',
  top: 68,
  right: 68,
};
const Style = styled.button`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  top: -60px;
  right: -60px;
  background-color: rgba(0, 0, 0, .54);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all ${ANIMATION_TIME}ms;
  &:hover{
    background-color: rgba(0, 0, 0, .7);
  }
`;

class Close extends React.PureComponent {
  static propTypes = {
    onClose: Types.func.isRequired,
  }

  render() {
    const { onClose } = this.props;
    return (
      <Style onClick={onClose}>
        <Icon name="close" style={iconStyle} />
      </Style>
    );
  }
}

export default Close;
