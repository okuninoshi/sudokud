import React from "react";
import styled from "styled-components";
import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Context from '../../store/context'
import {Grid} from '@geist-ui/react'
import { Mail, ArrowRight, ChevronLeft, Circle, Info, Slash, Box } from "@geist-ui/react-icons";

const Nav = styled(motion.nav)`
    width: 100%;
    position:relative;
    .link {
        cursor: pointer;
        margin: 0 1vw;
        padding: 4px;
    }
`

export default function Navigation() {
  const { state, dispatch } = useContext(Context)

  const activeStyle = { color: `${state.isDark ? '#444' : '#ccc'}`}
    return (
        <React.Fragment>
            {
            typeof window !== `undefined` &&
            (<TransitionState>
                {
                ({exit}) => { 
                    return(
                        <Nav>
                            <Grid.Container>
                                <Grid xs justify="flex-start">
                                    <TransitionLink
                                        id="about"
                                        className="link"
                                        activeStyle={activeStyle}
                                        to="/about"
                                        exit={{ 
                                            length: 0.3,
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
                                        <Info/>
                                    </TransitionLink>
                                </Grid>
                                <Grid xs justify="center">
                                    <TransitionLink
                                        id="home"
                                        className="link"
                                        activeStyle={activeStyle}
                                        to="/"
                                        entry={{ 
                                            state: {x: exit.state.fromAbout ? window.innerWidth : -window.innerWidth}
                                        }}
                                        exit={{ 
                                            length: 0.3,
                                            state: { x: window.innerWidth, opacity: 0, fromContact: false, fromAbout: false }
                                        }}
                                        onMouseEnter= {()=> {
                                            return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                            }}
                                            onMouseLeave= {()=> {
                                                return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                                            }}
                                            >
                                        <Box/>
                                    </TransitionLink>
                                </Grid>
                                <Grid xs justify="flex-end">
                                    <TransitionLink
                                        to="/contact"
                                        id="contact"
                                        className="link"
                                        activeStyle={activeStyle}
                                        exit={{ 
                                            length: 0.3,
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
                                        <Mail />
                                    </TransitionLink>
                                </Grid>
                            </Grid.Container>
                        </Nav>
                        )
                    }
                }
            </TransitionState>)
            }
        </React.Fragment>
    )
}
