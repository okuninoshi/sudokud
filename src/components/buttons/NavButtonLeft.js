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
                onMouseDown={() => (setActive(true))}
                onMouseUp={() => (setActive(false))}
                >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                id="svg989"
                width="100%"
                height="100%"
                version="1.1"
                viewBox="0 0 25.4 16.933"
                >
                    <g
                        id="layer1"
                        strokeLinecap="round"
                        strokeWidth="0.098"
                        paintOrder="markers fill stroke"
                        transform="translate(-84.515 -131.845)"
                    >
                        <path
                        id="btn-body"
                        fill="#916f7c"
                        fillOpacity="1"
                        d="M109.915 139.717v8.497H85.241v-8.497z"
                        opacity="1"
                        ></path>
                        <path
                        id="btn-borders"
                        fill="#241c1f"
                        d="M85.241 140.282v7.367h-.726v-7.367zm0 7.367h.726v.565h-.726zm.726.565h23.948v.564H85.967z"
                        opacity="1"
                        ></path>
                        <path
                        id="btn-shadow"
                        fill="#48373e"
                        fillOpacity="1"
                        d="M85.967 145.955v.564h23.948v1.694H85.967v-.564h-.726v-1.694z"
                        opacity="1"
                        ></path>
                        <motion.path
                        id="border-translate"
                        animate={{ y: active ? 1.310 : 0 }}
                        d="M109.915 131.845v.565H85.967v-.565zm-23.948.565v.564h-.726v-.564zm-.726.564v7.693l-.726.005v-7.697z"
                        opacity="1"
                        />
                        <motion.path
                            animate={{ y: active ? 1.310 : 0 }}
                        id="body-translate"
                        fill="#916f7c"
                        fillOpacity="1"
                        d="M109.915 132.41v14.109H85.967v-.564h-.726v-12.98h.726v-.565z"
                        opacity="1"
                        />
                    </g>
                </svg>
                <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                    {children}
                </motion.span>
            </ButtonWrapper>
        </TransitionLink>
    )
}