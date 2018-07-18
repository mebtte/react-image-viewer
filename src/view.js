import React from 'react';
import Types from 'prop-types';
import ReactDOM from 'react-dom';

import ImageViewer from './index';
import { TRANSITION_TIME } from './constant';

class Wrapper extends React.Component {
  static propTypes = {
    src: Types.string.isRequired,
    zIndex: Types.number.isRequired,
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
    this.setState({ open: false });
    setTimeout(onExited, TRANSITION_TIME);
  }

  render() {
    const { open } = this.state;
    const { src, zIndex } = this.props;
    return (
      <ImageViewer
        open={open}
        src={src}
        zIndex={zIndex}
        onClose={this.onClose}
      />
    );
  }
}

function view(src, zIndex = 3333) {
  const dom = document.createElement('div');
  document.body.appendChild(dom);
  const onExited = () => dom.remove();
  ReactDOM.render((
    <Wrapper
      src={src}
      zIndex={zIndex}
      onExited={onExited}
    />
  ), dom);
}

export default view;
