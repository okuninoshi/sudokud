import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ButtonWrapper } from './NavButtonLeft'
import TransitionLink from 'gatsby-plugin-transition-link'

export default function ({ children, ...props }) {
    const [active, setActive] = useState(false);
    return (
        <TransitionLink {...props}>
            <ButtonWrapper
                // onMouseEnter={() => (setActive(true))}
                // onMouseLeave={() => (setActive(false))}
                onMouseDown={() => (setActive(true))}
                onMouseUp={() => (setActive(false))}
            >
            <svg
                width="100%"
                height="100%"
                version="1.1"
                viewBox="0 0 25.4 16.933"
            >
            <g>
                <g
                strokeLinecap="round"
                paintOrder="markers fill stroke"
                transform="scale(1.5 1.16774)"
                >
                <path
                    id="btn-body"   
                    d="M0 6.741v7.277h16.933V6.74H8.467z"
                ></path>
                <path
                    id="btn-borders"
                    d="M0 14.018v.483h16.933v-.483H8.467z"
                ></path>
                <path
                    id="btn-shadow"
                    d="M0 12.567v1.45h16.933v-1.45H8.467z"
                ></path>
                <motion.path
                    animate={{ y: active ? 1.310 : 0 }}
                    transition={{
                        duration: 0.1
                    }}
                    id="border-translate"
                    d="M0 0v.484h16.933V0H8.467z"
                />
                <motion.path
                    animate={{ y: active ? 1.310 : 0 }}
                    transition={{
                        duration: 0.1
                    }}
                    id="body-translate"
                    d="M0 .484v12.082h16.933V.484H8.467z"
                    
                />
                <motion.path
                    animate={{ y: active ? 1.310 : 0 }}
                    transition={{
                        duration: 0.1
                    }}
                    fillOpacity={0.6}
                    d="M0 .484h.502v13.534H0z"
                />
                </g>
            </g>
            </svg>
            <motion.span
             className="btn-icon" 
             animate={{ y: active ? "3px" : 0 }} 
             transition={{
                duration: 0.1,
                type:'spring'
                }}>
                {children}
            </motion.span>
            </ButtonWrapper>
        </TransitionLink>
    )
}