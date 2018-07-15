import React from 'react';
import styled from 'styled-components';

import Progress from './Progress';

import { FadeIn } from './keyframes';
import { ANIMATION_TIME, LOAD_STATUS_TEXT } from './constant';

const Style = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: ${FadeIn} ${ANIMATION_TIME}ms;
  >.text{
    font-size: 12px;
    color: rgb(222, 222, 222);
    margin-top: 10px;
  }
`;

class Loading extends React.PureComponent {
  render() {
    return (
      <Style>
        <Progress />
        <div className="text">
          {LOAD_STATUS_TEXT.LOADING}
        </div>
      </Style>
    );
  }
}

export default Loading;
