import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Context from '../store/context'

const Cursor = styled(motion.div)`
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 15;
  transform: translate(-50%, -50%);
  transform-origin: 100% 100%;
  backdrop-filter: invert(100%);
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
          document.removeEventListener('mousemove', logKey);
        };
      }, [posX, posY]);
    return(
        <Cursor
        isHovered={state.isHovered} 
        style={{
          top: `${posY + "px"}`,
          left: `${posX + "px"}`,
        }}
        animate={{
          width: state.isHovered ? '28px' : '24px',
          height: state.isHovered ? '28px' : '24px',
        }}
         id="virtual-cursor">
         </Cursor>
    )
}
export default VirtualCursor