# react-image-viewer
React Component that view a image.

![](./example/screenshot.png)

## [example](https://mebtte.github.io/react-image-viewer/example)

## Install
```bash
# ImageViewer requirement
npm install --save react react-dom prop-types styled-components
```
```bash
npm install -S @mebtte/react-image-viewer
```

## Usage
### As Component
```js
import React from 'react';
import ReactDOM from 'react-dom';

import ImageViewer from '@mebtte/react-image-viewer';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      src: 'https://mebtte.com/resource/wallpaper',
    };
  }

  openImageViewer = () => this.setState({ open: true })

  closeImageViewer = () => this.setState({ open: false })

  render() {
    const { open, src } = this.state;
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

ReactDOM.render(<Demo />, moundNode);
```
### As Function
```js
import React from 'react';
import ReactDOM from 'react-dom';

import ImageViewer from '@mebtte/react-image-viewer';

const src = 'https://mebtte.com/resource/wallpaper';

class Demo extends React.Component {
  view = () => ImageViewer.view(src)

  render() {
    return (
      <button type="button" onClick={this.view}>
        open
      </button>
    );
  }
}

ReactDOM.render(<Demo />, moundNode);
```

## Props
| name | type | required  | description |
| --- | --- | --- | --- |
| open | Boolean | true | The visibility of `ImageViewer`. |
| src | String | true | The src of image. |
| onClose | Function | true | The close event handler. |
