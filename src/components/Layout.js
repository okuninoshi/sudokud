import React, { useContext, Fragment } from "react"
import Context from '../store/context'
import Avatar from "./avatar"
import VirtualCursor from './VirtualCursor'
import ToggleDarkMode from './buttons/ToggleDarkMode'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'
import {isBrowser} from 'react-device-detect'
import styled from 'styled-components'


const Layout = ({ children }) => {
  const { state } = useContext(Context)
  return (
    <Fragment>
      <GlobalStyle isDark={state.isDark} />
      <NavBar isDark={state.isDark}/>
      {isBrowser && <VirtualCursor />}
      <main>
          {children}
      </main>
      <Canvas />
    </Fragment>
  )
};


const Canvas = styled.canvas`
position: fixed;
border:1px solid deeppink;
top: -50vh;
left:-50vw;
width:200vw;
height:200vh;
background: url('/noise-transparent.png') repeat 50%;
background-size:30rem;
opacity:0.48;
z-index:99;
pointer-events:none;
animation:noise 0.3s infinite;
@keyframes noise {
  0%{
    transform:translate(0)
    }
  10%{transform:translate(-5%,-5%)}
  20%{transform:translate(-10%,5%)}
  30%{transform:translate(5%,-10%)}
  40%{transform:translate(-5%,15%)}
  50%{transform:translate(-10%,5%)}
  60%{transform:translate(15%)}
  70%{transform:translateY(10%)}
  80%{transform:translate(-15%)}
  90%{transform:translate(10%,5%)}
  to{transform:translate(5%)}
  }
`

const NavBar = () => {
  return(
    <div style={{
      position: 'fixed',
      top: 0,
      width:'100%',
      display:"flex",
      alignItems:"center",
      zIndex: 20,
      padding:"2vh 5vw",
      background: '#00000000',
      backdropFilter: 'blur(4px)',
    }}>
      <Avatar />
      <div style={{
        flexGrow: 1,
      }}>
        <Navigation />
      </div>
      <ToggleDarkMode />
    </div>
  )
}

export default Layout
