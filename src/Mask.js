import styled from 'styled-components';

import { ANIMATION_TIME } from './constant';

export default styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity ${ANIMATION_TIME}ms;
  ${({ open, position, visible }) => `
    cursor: ${position === 'absolute' ? 'move' : 'auto'};
    position: ${position};
    background-color: rgba(0, 0, 0, ${visible ? 0.54 : 0});
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'auto' : 'none'};
  `}
`;
