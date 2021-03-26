import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Context from '../store/context'

const Cursor = styled(motion.div)`
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  z-index: 25;
  transform: translate(-50%, -50%);
  transform-origin: 100% 100%;
  border: 1px solid ${props => props.isDark ? props.theme.dark.text : '#000'};
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
          width: state.isHovered ? '28px' : '24px',
          height: state.isHovered ? '28px' : '24px',
        }}
         id="virtual-cursor" />
    )
}
export default VirtualCursor