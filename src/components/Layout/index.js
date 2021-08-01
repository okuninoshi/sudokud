import React, { useContext, Fragment } from "react"
import Context from '../../store/context'
import VirtualCursor from './VirtualCursor'
import GlobalStyle from './GlobalStyle'
import {isBrowser} from 'react-device-detect'
import NavBar from './NavBar'

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
    </Fragment>
  )
};

export default Layout
