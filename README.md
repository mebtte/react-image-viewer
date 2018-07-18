# react-image-viewer
React Component that view a image. [See it online](https://mebtte.github.io/react-image-viewer/example).

![](./example/screenshot.png)

## Install
```bash
# ImageViewer requirement
npm install --save react prop-types
```
```bash
npm install --save @mebtte/react-image-viewer
```

## Props
| name | type | required | default | description |
| --- | --- | --- | --- | --- |
| open | Boolean | true | | Visibility. |
| src | String | true | | The src of image. |
| onClose | Function | true | | The close event handler. |
| zIndex | Number | false | 3333 | The z-index css. |

## Usage
### As Component
```js
import React from 'react';

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

export default Demo;
```

### As Function
#### view(src, [zIndex = 3333]) => Void
> Use it as a function to view a image.
* params
> `src (String)`: The src of image.  
> `[zIndex] (Number)`: The css `z-index`, default `3333`.
* example
```bash
# function depend on `react-dom`
npm install --save-dev react-dom
```
```js
import React from 'react';

import view from '@mebtte/react-image-viewer/view';

const src = 'https://mebtte.com/resource/wallpaper';

class Demo extends React.Component {
  viewImage = () => view(src)

  render() {
    return (
      <button type="button" onClick={this.viewImage}>
        open
      </button>
    );
  }
}

export default Demo;
```
