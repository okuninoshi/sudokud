import React, { useContext, Fragment } from "react"
import Nav from './Nav'
import Context from '../store/context'
import { AnimatePresence } from 'framer-motion'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * > * {
    box-sizing: border-box;
  }
  body{
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    color:${props => (props.isDark ? props.theme.dark.text : props.theme.light.text)};
    margin:0;
    padding:0;
    background:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
    box-sizing: border-box;
    overflow-x:hidden;
  }
`

const Layout = ({ children }) => {
  const { state } = useContext(Context)
  return (
    <Fragment>
      <GlobalStyle isDark={state.isDark} />
      <Nav/>
      <AnimatePresence exitBeforeEnter>
          {children}
      </AnimatePresence>
    </Fragment>
  )
};

export default Layout
