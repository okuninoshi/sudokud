import React, { useContext, Fragment } from "react"
import Nav from './Nav'
import Context from '../store/context'
import Avatar from "./avatar"
import VirtualCursor from './VirtualCursor'
import ToggleDarkMode from './buttons/ToggleDarkMode'
import GlobalStyle from './GlobalStyle'
import Navigation from './Navigation'


const Layout = ({ children }) => {
  const { state } = useContext(Context)
  return (
    <Fragment>
      <GlobalStyle isDark={state.isDark} />
      <div style={{
        position: 'fixed',
        top: 0,
        padding:'5vh 5vw',
        width:'100%',
        zIndex: 30,
        display: "flex",
        flexDirection: 'row',
        alignItems:'center',
      }}>
        <div style={{
          flexGrow:1,
        }}>
          <Avatar />
        </div>
        <Navigation/>
        <ToggleDarkMode />
      </div>
      <VirtualCursor />
      <main>
          {children}
      </main>
    </Fragment>
  )
};

export default Layout
