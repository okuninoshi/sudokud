import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Context from '../../store/context'

const Cursor = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 99;
  border-radius: 50%;
  border: 1px double ${props =>  props.theme.palette.chinaPink};
`
const VirtualCursor = () => {
    const { state } = useContext(Context)
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', logKey);
        window.addEventListener('scroll', logKey);
        function logKey(e) {
          return [
            setposX(e.pageX - 16),
            setposY(e.pageY - 16),
          ]
        }
        return () => {
          window.removeEventListener('mousemove', logKey);
        };
      }, [posX, posY]);
    return(
        <Cursor
          style={{
            top: `${posY + "px"}`,
            left: `${posX + "px"}`,
          }}
          initial={{
            width: '0px',
            height: '0px',
            opacity: 0,
          }}
          animate={{
            width: "32px",
            height: "32px",
            opacity: 1,
            scale: state.isHovered || state.INPUT_HOVERED ? 1.4 : 0.9
          }}
         id="virtual-cursor" />
    )
}
export default VirtualCursor