import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import TransitionLink from 'gatsby-plugin-transition-link'

export const ButtonWrapper = styled(motion.div)`
width:74px;
height:100%;
padding:0;
margin:0;
position:relative;

.btn-icon{
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
}
#btn-body,
#body-translate{
    fill:#218cff;
    fill-opacity:1;
    stroke-width:0.074332;
    stroke-linecap:round;
    paint-order:markers fill stroke;
}
#btn-borders,
#border-translate{
    fill:#001b38;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;

}
#btn-shadow{
    fill:#005bbd;
    fill-opacity:1;
    stroke-width:0.0742069;
    stroke-linecap:round;
    paint-order:markers fill stroke;

}

`

export default function ({ children, ...props }) {
    const [active, setActive] = useState(false);
    return (
        <TransitionLink {...props}>
            <ButtonWrapper
                onClick={() => (setActive(true))}
                // onMouseLeave={() => (setActive(false))}
                >

                
                <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                    {children}
                </motion.span>
            </ButtonWrapper>
        </TransitionLink>
    )
}
