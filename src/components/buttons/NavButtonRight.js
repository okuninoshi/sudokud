import React from 'react'
import { useState, useContext } from 'react'
import { ButtonWrapper } from './NavButtonLeft'
import { motion } from 'framer-motion'
import TransitionLink from 'gatsby-plugin-transition-link'
import Context from '../../store/context'

export default function ({ children, ...props }) {
    const [active, setActive] = useState(false);
    const { state } = useContext(Context);
    return (
        <TransitionLink {...props}>
            <ButtonWrapper
                isDark={state.isDark}
                onMouseDown={() => (setActive(true))}
                onMouseUp={() => (setActive(false))}
                >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 25.4 16.933"
                    version="1.1"
                    id="svg989"
                    >
                    <g
                        id="right-button-layer1"
                        transform="translate(-140.45595,-91.7793)">
                         <path
          id="btn-body"
          fill="#916f7c"
          fillOpacity="1"
          strokeWidth="0.098"
          d="M140.456 99.651v8.497h24.674v-8.497z"
          opacity="1"
        ></path>
                        <path
          id="btn-borders"
          fill="#241c1f"
          strokeWidth="0.098"
          d="M165.13 100.216v7.368h.726v-7.368zm0 7.368h-.725v.564h.725zm-.725.564h-23.949v.565h23.949z"
          opacity="1"
        ></path>
                        <path
          id="btn-shadow"
          fill="#48373e"
          fillOpacity="1"
          strokeWidth="0.098"
          d="M164.405 105.89v.564h-23.949v1.694h23.949v-.564h.725V105.889z"
          opacity="1"
        ></path>
                        <motion.path
                            animate={{ y: active ? 1.310 : 0 }}
                            id="border-translate"
          d="M140.456 91.78v.564h23.949v-.565zm23.949.564v.565h.725v-.565zm.725.565v7.692l.726.005V92.91z"
          />
                        <motion.path
                            animate={{ y: active ? 1.310 : 0 }}
                            id="body-translate"
                            d="M140.456 92.344v14.11h23.949v-.565h.725V92.91h-.725v-.565z" />
                        <motion.path
                            id="between-button-shadow"
                            animate={{ y: active ? 1.310 : 0 }}
                            fillOpacity={0.4}
         
          d="M140.456 92.344h.752v15.804h-.752z" />
                    </g>
                </svg>
                <motion.span className="btn-icon" animate={{ y: active ? "3px" : 0 }}>
                    {children}
                </motion.span>
            </ButtonWrapper>
        </TransitionLink>
    )
}
