import React, { useContext, Fragment } from "react"
import Context from '../store/context'
import Avatar from "./avatar"
import VirtualCursor from './VirtualCursor'
import ToggleDarkMode from './buttons/ToggleDarkMode'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'
import {isBrowser} from 'react-device-detect'

const Layout = ({ children, pathname }) => {
  const { state } = useContext(Context)
  return (
    <Fragment>
      <GlobalStyle isDark={state.isDark} />
      <NavBar pathname={pathname} isDark={state.isDark}/>
      {isBrowser && <VirtualCursor />}
      <main>
          {children}
      </main>
    </Fragment>
  )
};


const NavBar = ({pathname, isDark}) => {
  return(
    <div style={{
      position: 'fixed',
      top: 0,
      padding:'2vh 5vw',
      width:'100%',
      zIndex: 20,
      display: "flex",
      flexDirection: 'row',
      alignItems:'center',
      // background: isDark ? "#272525" : "#F1F1F2",
      background: 'transparent',
      backdropFilter: 'blur(9px)'
    }}>
      <Avatar />
      <div style={{
        flexGrow: 1,
      }}>
        <Navigation path={pathname}/>
      </div>
      <ToggleDarkMode />
    </div>
  )
}

export default Layout
