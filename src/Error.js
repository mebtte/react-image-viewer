import React from 'react';
import Types from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';

import { FadeIn } from './keyframes';
import { ANIMATION_TIME, LOAD_STATUS_TEXT } from './constant';

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} ${ANIMATION_TIME}ms;
  >.text{
    margin-top: 10px;
    font-size: 12px;
    color: rgb(222, 222, 222);
    >.reload{
      margin-left: 5px;
      border: none;
      outline: none;
      color: rgb(222, 222, 222);
      padding: 0;
      background-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      &:hover{
        color: white;
        text-decoration: underline;
      }
    }
  }
`;

class Error extends React.Component {
  static propTypes = {
    reload: Types.func.isRequired,
  }

  render() {
    const { reload } = this.props;
    return (
      <Style>
        <Icon name="meh" size={36} />
        <div className="text">
          {LOAD_STATUS_TEXT.ERROR}
          <button className="reload" type="button" onClick={reload}>
            {LOAD_STATUS_TEXT.RELOAD}
          </button>
        </div>
      </Style>
    );
  }
}

export default Error;
