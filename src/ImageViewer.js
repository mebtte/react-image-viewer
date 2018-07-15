import React, { Fragment } from 'react';
import Types from 'prop-types';

import Mask from './Mask';
import Error from './Error';
import Loading from './Loading';
import ImageBox from './ImageBox';
import Close from './Close';
import Toolbar from './Toolbar';

import { ANIMATION_TIME, LOAD_STATUS, STEP_WIDTH, WHEEL_INTERVAL, MIN_WIDTH } from './constant';
import view from './view';

/**
 * The component that view a image.
 * @author Mebtte
 */
class ImageViewer extends React.Component {
  static propTypes = {
    /** the url of image, if `null`, the component do nothing. */
    src: Types.string.isRequired,
    /** visibility of viewer. */
    open: Types.bool.isRequired,
    /** the close event handler */
    onClose: Types.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState(props);
  }

  static view = view

  getInitialState = props => ({
    src: props.src,

    loadImageStatus: LOAD_STATUS.LOADING, // the status of image

    left: 0,
    top: 0,
    scale: 1, // the scale of image
    rotate: 0, // the rotation of image
    naturalWidth: 0,
    naturalHeight: 0,
  })

  componentDidMount() {
    if (this.props.open) {
      this.loadImage(this.props.src);
    }
  }

  componentWillReceiveProps(next) {
    if (
      (next.open && !this.props.open)
      || next.src !== this.props.src
     ) {
      this.loadImage(next.src);
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
    const { lastX, lastY } = this;
    const { clientX, clientY } = event;
    const { left, top } = this.state;
    const offsetX = clientX - lastX;
    const offsetY = clientY - lastY;
    this.setState({
      left: left + offsetX,
      top: top + offsetY,
    });
    this.lastX = clientX;
    this.lastY = clientY;
  }

  onWheel = (event) => {
    event.preventDefault();
    const now = new Date();
    if (this.lastWheelTime && now - this.lastWheelTime < WHEEL_INTERVAL) {
      return;
    }
    const { deltaY } = event;
    if (deltaY > 0) {
      this.onEnlarge();
    } else if (deltaY < 0) {
      this.onShrink();
    }
    this.lastWheelTime = now;
  }

  onEnlarge = () => {
    let { scale } = this.state;
    const { naturalWidth } = this.state;
    scale = (naturalWidth * scale + STEP_WIDTH) / naturalWidth;
    this.setState({ scale });
  }

  onShrink = () => {
    let { scale } = this.state;
    const { naturalWidth } = this.state;
    let width = naturalWidth * scale - STEP_WIDTH;
    width = width < MIN_WIDTH ? MIN_WIDTH : width;
    scale = width / naturalWidth;
    this.setState({ scale: scale < 0.2 ? 0.2 : scale });
  }

  onRotate = () => {
    const { rotate } = this.state;
    this.setState({ rotate: rotate + 90 });
  }

  onTransitionEnd = () => {
    const { open } = this.props;
    if (!open) {
      console.log('exited');
    }
  }

  loadImage = (src) => {
    this.setState({ loadImageStatus: LOAD_STATUS.LOADING });
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const { width, height } = this.root.getBoundingClientRect();
      const { naturalWidth, naturalHeight } = image;
      let left = (width - naturalWidth) / 2;
      let top = (height - naturalHeight) / 2;
      let scale = 1;
      let auturalWidth = naturalWidth;
      let auturalHeight = naturalHeight;
      if (auturalWidth > width) {
        auturalWidth = width;
        scale = auturalWidth / naturalWidth;
        auturalHeight = naturalHeight * scale;
      }
      if (auturalHeight > height) {
        auturalHeight = height;
        scale = auturalHeight / naturalHeight;
        auturalWidth = naturalWidth * scale;
      }
      this.setState({
        loadImageStatus: LOAD_STATUS.LOADED,
        naturalHeight,
        naturalWidth,
        top,
        left,
        scale,
      });
    };
    image.onerror = () => this.setState({ loadImageStatus: LOAD_STATUS.ERROR });
  }

  renderContent = (status, open) => {
    const { src } = this.props;
    if (status === LOAD_STATUS.LOADED) {
      const {
        left,
        top,
        rotate,
        scale,
      } = this.state;
      return (
        <Fragment>
          <ImageBox
            src={src}
            left={left}
            top={top}
            rotate={rotate}
            scale={scale}
          />
          <Mask
            open={open}
            position="absolute"
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
            onWheel={this.onWheel}
          />
          <Toolbar
            onEnlarge={this.onEnlarge}
            onShrink={this.onShrink}
            onRotate={this.onRotate}
          />
        </Fragment>
      );
    }

    if (status === LOAD_STATUS.LOADING) {
      return (
        <Loading />
      );
    }

    /* error */
    return (
      <Error reload={() => this.loadImage(src)} />
    );
  }

  render() {
    const { src, open, onClose } = this.props;
    if (!src) {
      return null;
    }
    const { loadImageStatus } = this.state;
    return (
      <Mask
        open={open}
        position="fixed"
        visible
        innerRef={root => this.root = root}
        onTransitionEnd={this.onTransitionEnd}
      >
        {this.renderContent(loadImageStatus, open)}
        <Close onClose={onClose} />
      </Mask>
    );
  }
}

export default ImageViewer;
