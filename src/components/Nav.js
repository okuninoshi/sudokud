import React from 'react';
// import  { useState } from 'react'
import NavButtonLeft from './buttons/NavButtonLeft'
import NavButtonCenter from './buttons/NavButtonCenter'
import NavButtonRight from './buttons/NavButtonRight'
import styled from 'styled-components'
import { TransitionState } from 'gatsby-plugin-transition-link'




const Nav = styled.nav`
position: fixed;
bottom: 8vh;
width: 100%;
margin: auto;
padding: 0 10vw;
background: inherit;
display: flex;
align-items: center;
justify-content: center;
`

const NavBar = () => {
  return (
    <TransitionState>
      {
        ({exit}) => { 
          return(
          <Nav>
            <NavButtonLeft
              id="about"
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
            </NavButtonLeft>
            <NavButtonCenter
              id="home"
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
            </NavButtonCenter>
            <NavButtonRight
              to="/contact"
              id="contact"
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
            </NavButtonRight>
          </Nav>
      )}
    }
    </TransitionState>
  )
};

export default NavBar;
