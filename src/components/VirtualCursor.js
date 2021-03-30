import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Context from '../store/context'

const Cursor = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 25;
  transform: translate(-50%, -50%);
  transform-origin: 100% 100%;
  border: 2px dashed ${props =>  props.theme.palette.Liberty};
  backdrop-filter: hue-rotate(290deg);
`
const VirtualCursor = () => {
    const { state } = useContext(Context)
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', logKey);
        function logKey(e) {
          return [
            setposX(e.pageX),
            setposY(e.pageY),
          ]
        }
        return () => {
          window.removeEventListener('mousemove', logKey);
        };
      }, [posX, posY]);
    return(
        <Cursor
          isDark={state.isDark}
          isHovered={state.isHovered} 
          style={{
            top: `${posY + "px"}`,
            left: `${posX + "px"}`,
          }}
          initial={{
            width: '0px',
            height: '0px',
          }}
          animate={{
            width: state.isHovered ? '80px' : '32px',
            height: state.isHovered ? '32px' : '32px',
            borderRadius: state.isHovered ? '0%' : '50%',
          }}
         id="virtual-cursor" />
    )
}
export default VirtualCursor