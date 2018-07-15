import React from 'react';

import { Rotate } from './keyframes';
import Icon from './Icon';

const progressStyle = {
  animation: `${Rotate} 2s infinite linear`,
};

class Progress extends React.PureComponent {
  render() {
    return (
      <Icon name="loading" size={36} style={progressStyle} />
    );
  }
}

export default Progress;
