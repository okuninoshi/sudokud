import React from "react";
import styled from "styled-components";
import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Context from '../store/context'



const Nav = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:relative;
    .link {
        cursor: pointer;
        margin: 0 1vw;
        padding: 4px;
    }
`

export default function Navigation() {
  const { state, dispatch } = useContext(Context)

  const activeStyle = { textDecoration: `line-through ${state.isDark ? '#fff' : '#000'} wavy 2.5px`}
    return (
        <React.Fragment>
            {
            typeof window !== `undefined` &&
            (<TransitionState>
                {
                ({exit}) => { 
                    return(
                        <Nav>
                            <TransitionLink
                                id="about"
                                className="link"
                                activeStyle={activeStyle}
                                to="/about"
                                exit={{ 
                                    length: 0.5,
                                    state: { x: window.innerWidth, opacity: 0, fromAbout: true, fromContact: false }
                                }}
                                entry={{ 
                                    state: { x: -window.innerWidth }
                                }}
                                onMouseEnter= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                    }}
                                onMouseLeave= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                }}
                                >
                                ABOUT
                            </TransitionLink>
                            <TransitionLink
                                id="home"
                                className="link"
                                activeStyle={activeStyle}
                                to="/"
                                entry={{ 
                                    state: {x: exit.state.fromAbout ? window.innerWidth : -window.innerWidth}
                                }}
                                exit={{ 
                                    length: 0.5,
                                    state: { x: window.innerWidth, opacity: 0, fromContact: false, fromAbout: false }
                                }}
                                onMouseEnter= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                    }}
                                onMouseLeave= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                }}
                            >
                                HOME
                            </TransitionLink>
                            <TransitionLink
                                to="/contact"
                                id="contact"
                                className="link"
                                activeStyle={activeStyle}
                                exit={{ 
                                    length: 0.5,
                                    state: { x: -window.innerWidth + -window.innerWidth/4, opacity: 0, fromContact: true, fromAbout: false }
                                }}
                                entry={{ 
                                    state: { x: window.innerWidth, }
                                }}
                                onMouseEnter= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                  }}
                                onMouseLeave= {()=> {
                                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                }}
                                >
                                CONTACT
                            </TransitionLink>
                        </Nav>
                        )
                    }
                }
            </TransitionState>)
            }
        </React.Fragment>
    )
}
