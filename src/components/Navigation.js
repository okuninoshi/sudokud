import React from "react";
// import { useState } from "react";
// import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { TransitionState } from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position:relative;
    padding-right: 6vw;
    .link {
        cursor: pointer;
        padding: 4px 3vw;
    }
 `
export default function Navigation() {
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
                                to="/about"
                                exit={{ 
                                    length: 0.5,
                                    state: { x: window.innerWidth, opacity: 0, fromAbout: true, fromContact: false }
                                }}
                                entry={{ 
                                    delay: 0.5,
                                    state: { x: -window.innerWidth }
                                }}
                                >
                                About
                            </TransitionLink>
                            <TransitionLink
                                id="home"
                                className="link"
                                to="/"
                                entry={{ 
                                delay: 0.5,
                                state: {x: exit.state.fromAbout ? window.innerWidth : -window.innerWidth}
                                }}
                                exit={{ 
                                length: 0.5,
                                state: { x: window.innerWidth, opacity: 0, fromContact: false, fromAbout: false }
                                }}
                                >
                                Home
                            </TransitionLink>
                            <TransitionLink
                                to="/contact"
                                id="contact"
                                className="link"
                                exit={{ 
                                    length: 0.5,
                                    state: { x: -window.innerWidth, opacity: 0, fromContact: true, fromAbout: false }
                                }}
                                entry={{ 
                                    delay: 0.5,
                                    state: { x: window.innerWidth, }
                                }}
                                >
                                    Contact
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
