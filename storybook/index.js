import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageViewer from '../src/index.js';
import view from '../src/view.js';

const src = 'https://mebtte.com/resource/wallpaper';

class ComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openImageViewer = () => this.setState({ open: true })

  closeImageViewer = () => this.setState({ open: false })

  render() {
    const { open } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openImageViewer}>
          open
        </button>
        <ImageViewer
          open={open}
          src={src}
          onClose={this.closeImageViewer}
        />
      </div>
    );
  }
}

class FunctionDemo extends React.Component {
  view = () => view(src)

  render() {
    return (
      <button type="button" onClick={this.view}>
        open
      </button>
    );
  }
}

storiesOf('ImageViewer', module)
  .add('as component', () => (
    <ComponentDemo />
  ))
  .add('as function', () => (
    <FunctionDemo />
  ));
