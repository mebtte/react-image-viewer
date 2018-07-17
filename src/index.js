import React from 'react';
import Types from 'prop-types';

import Aux from 'react-aux';

import style from './index.css';
import { LOAD_STATUS, WIDTH_STEP, MIN_SCLAE } from './constant';
import view from './util/view';

import CloseButton from './component/CloseButton';
import LoadError from './component/LoadError';
import Progress from './component/Progress';
import ImageBox from './component/ImageBox';
import Mask from './component/Mask';
import Toolbar from './component/Toolbar';

class ImageViewer extends React.Component {
  static propTypes = {
    /** Visibility of `ImageViewer`. */
    open: Types.bool.isRequired,
    /** The src of image. */
    src: Types.string.isRequired,
    /** The close event handler. */
    onClose: Types.func.isRequired,
    /** The z-index css of `ImageViewer`. */
    zIndex: Types.number,
  }

  static defaultProps = {
    zIndex: 3333,
  }

  static view = view

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return {
      loadImageStatus: LOAD_STATUS.LOADING, // the status of loading image
      left: 0,
      top: 0,
      rotate: 0,
      scale: 1,
      naturalHeight: 0,
      naturalWidth: 0,
    };
  }

  componentDidMount(){
    if (this.props.open) {
      this.loadImage();
    }
  }

  componentWillReceiveProps(next) {
    if (next.open && !this.props.open) {
      this.loadImage();
    }
    if (next.src !== this.props.src) {
      this.setState(this.getInitialState());
    }
  }

  onMouseDown = (event) => {
    const { clientX, clientY } = event;
    this.mouseDown = true;
    this.lastX = clientX;
    this.lastY = clientY;
  }

  onMouseUp = () => this.mouseDown = false

  onMouseMove = (event) => {
    if (!this.mouseDown) {
      return;
    }
    const { clientX, clientY } = event;
    const { top, left } = this.state;
    const offsetX = clientX - this.lastX;
    const offsetY = clientY - this.lastY;
    this.setState({
      top: top + offsetY,
      left: left + offsetX,
    });
    this.lastX = clientX;
    this.lastY = clientY;
  }

  onEnlarge = () => {
    const { naturalWidth, scale } = this.state;
    const width = naturalWidth * scale + WIDTH_STEP;
    this.setState({ scale: width / naturalWidth });
  }

  onShrink = () => {
    const { naturalWidth, scale } = this.state;
    const width = naturalWidth * scale - WIDTH_STEP;
    const _scale = width / naturalWidth;
    this.setState({ scale: _scale < MIN_SCLAE ? MIN_SCLAE : _scale });
  }

  onRotate = () => this.setState({ rotate: this.state.rotate + 90 })

  /* load image */
  loadImage = () => {
    const { src } = this.props;
    this.setState({ loadImageStatus: LOAD_STATUS.LOADING });
    const image = new window.Image();
    image.src = src;
    image.onload = () => {
      const { naturalWidth, naturalHeight } = image;
      const { width, height } = this.root.getBoundingClientRect();
      const left = (width - naturalWidth) / 2;
      const top = (height - naturalHeight) / 2;
      let scale = 1;
      let acturalWidth = naturalWidth;
      let acturalHeight = naturalHeight;
      if (acturalWidth > width) {
        acturalWidth = width;
        scale = acturalWidth / naturalWidth;
        acturalHeight = naturalHeight * scale;
      }
      if (acturalHeight > height) {
        acturalHeight = height;
        scale = acturalHeight / naturalHeight;
        acturalWidth = naturalWidth * scale;
      }
      this.setState({
        left,
        top,
        loadImageStatus: LOAD_STATUS.LOADED,
        naturalHeight,
        naturalWidth,
        scale,
      });
    };
    image.onerror = () => this.setState({ loadImageStatus: LOAD_STATUS.ERROR });
  }

  renderContent = () => {
    const { loadImageStatus: status } = this.state;
    if (status === LOAD_STATUS.LOADED) {
      const { src } = this.props;
      const { left, top, rotate, scale } = this.state;
      return (
        <Aux>
          <ImageBox
            src={src}
            left={left}
            top={top}
            rotate={rotate}
            scale={scale}
          />
          <Mask
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
          />
          <Toolbar
            onEnlarge={this.onEnlarge}
            onShrink={this.onShrink}
            onRotate={this.onRotate}
          />
        </Aux>
      );
    }
    if (status === LOAD_STATUS.LOADING) {
      return (
        <Progress />
      );
    }
    return (
      <LoadError reload={this.loadImage} />
    );
  }

  render() {
    const { open, zIndex, onClose } = this.props;
    return (
      <div
        className={`${style.base} ${open ? style.open : style.close}`}
        style={{ zIndex }}
        ref={root => this.root = root}
      >
        {this.renderContent()}
        <CloseButton onClose={onClose} />
      </div>
    );
  }
}

export default ImageViewer;
