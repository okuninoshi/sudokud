import React from 'react';
import NavButtonLeft from './buttons/NavButtonLeft'
import NavButtonCenter from './buttons/NavButtonCenter'
import NavButtonRight from './buttons/NavButtonRight'
import styled from 'styled-components'
import { TransitionState } from 'gatsby-plugin-transition-link'




const Nav = styled.nav`
position: fixed;
top: 90vh;
right: 0;
margin: auto;
padding: 0 5vw;
display: flex;
justify-content: center;
align-items: flex-end;
z-index: 100;
a{
  color: ${props => props.theme.palette.chinaPink};
}
a:hover{
  color: ${props => props.theme.light.chinaPink};
}
@media (max-width: 600px){
  top: 90vh;
}
`

const NavBar = () => {
  return (
    <React.Fragment>
      {
        typeof window !== `undefined` &&
      (<TransitionState>
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
      </TransitionState>)
      }
    </React.Fragment>
  )
};

export default NavBar;
