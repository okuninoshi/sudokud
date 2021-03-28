import React from "react";
// import { useState } from "react";
// import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import {motion} from 'framer-motion'

const Nav = styled(motion.nav)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position:relative;
    padding-right: 10vw;
    .link {
        cursor: pointer;
        padding: 4px 2vw;
    }
 `
export default function Navigation({path}) {
    return (
        <React.Fragment>
            {
            typeof window !== `undefined` &&
            (<TransitionState>
                {
                ({exit}) => { 
                    return(
                        <Nav>
                            {path !== "/about" &&
                                <motion.span
                                initial={{
                                    opacity: 0,
                                    x:-10,
                                }}
                                animate={{
                                    opacity: 1,
                                    x:0,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                >
                                    <TransitionLink
                                        id="about"
                                        className="link"
                                        to="/about"
                                        exit={{ 
                                            length: 0.5,
                                            state: { x: window.innerWidth, opacity: 0, fromAbout: true, fromContact: false }
                                        }}
                                        entry={{ 
                                            state: { x: -window.innerWidth }
                                        }}
                                        >
                                        ABOUT
                                    </TransitionLink>
                                </motion.span>}
                            {path !== "/" &&
                            <motion.span
                            initial={{
                                opacity: 0,
                                x:-10,
                            }}
                            animate={{
                                opacity: 1,
                                x:0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            >
                                <TransitionLink
                                id="home"
                                className="link"
                                to="/"
                                entry={{ 
                                    state: {x: exit.state.fromAbout ? window.innerWidth : -window.innerWidth}
                                }}
                                exit={{ 
                                    length: 0.5,
                                    state: { x: window.innerWidth, opacity: 0, fromContact: false, fromAbout: false }
                                }}
                                >
                                HOME
                            </TransitionLink>
                            </motion.span>
                            }
                            {path !== "/contact" &&
                            <motion.span
                            initial={{
                                opacity: 0,
                                x:-10,
                            }}
                            animate={{
                                opacity: 1,
                                x:0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            >
                            <TransitionLink
                                to="/contact"
                                id="contact"
                                className="link"
                                exit={{ 
                                    length: 0.5,
                                    state: { x: -window.innerWidth + -window.innerWidth/4, opacity: 0, fromContact: true, fromAbout: false }
                                }}
                                entry={{ 
                                    state: { x: window.innerWidth, }
                                }}
                                >
                                CONTACT
                            </TransitionLink>
                            </motion.span>
                            }
                        </Nav>
                        )
                    }
                }
            </TransitionState>)
            }
        </React.Fragment>
    )
}
