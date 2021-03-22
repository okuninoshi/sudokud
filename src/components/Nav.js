import React from 'react';
// import  { useState } from 'react'
import NavButtonLeft from './buttons/NavButtonLeft'
import NavButtonCenter from './buttons/NavButtonCenter'
import NavButtonRight from './buttons/NavButtonRight'
import styled from 'styled-components'
import { TransitionState } from 'gatsby-plugin-transition-link'




const Nav = styled.nav`
position: absolute;
bottom: 2vh;
width: 100%;
margin: auto;
padding: 0 10vw;
display: flex;
z-index: 10;
align-items: flex-end;
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
              id="work"
              to="/work"
              exit={{ 
                length: 0.5,
                state: { x: window.innerWidth, opacity: 0, fromAbout: true, fromContact: false }
              }}
              entry={{ 
                delay: 0.5,
                state: { x: -window.innerWidth }
              }}
              >
              Work
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
