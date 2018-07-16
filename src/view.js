import React from 'react';
import Types from 'prop-types';
import ReactDOM from 'react-dom';

import ImageViewer from './index'; // eslint-disable-line

import { ANIMATION_TIME } from './constant';

class Container extends React.Component {
  static propTypes = {
    src: Types.string.isRequired,
    onExited: Types.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ open: true }), 0);
  }

  onClose = () => {
    const { onExited } = this.props;
    this.setState({ open: false }, () => setTimeout(onExited, ANIMATION_TIME));
  }

  render() {
    const { open } = this.state;
    const { src, onExited } = this.props;
    return (
      <ImageViewer
        open={open}
        src={src}
        onClose={this.onClose}
        onExited={onExited}
      />
    );
  }
}

function view(src) {
  const dom = document.createElement('div');
  const onExited = () => dom.remove();
  document.body.appendChild(dom);
  ReactDOM.render((
    <Container
      src={src}
      onExited={onExited}
    />
  ), dom);
}

export default view;
