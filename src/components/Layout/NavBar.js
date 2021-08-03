import React from 'react'
import Avatar from "./avatar"
import ToggleDarkMode from '../buttons/ToggleDarkMode'
import Navigation from './Navigation'
import { useContext } from 'react'
import Context from '../../store/context'
import styled from 'styled-components'
import { Flex, Box } from 'reflexbox/styled-components'

const FixedTop = styled.nav`
  position: fixed;
  top: 0;
  width:100%;
  z-index: 20;
  padding: 2vh 3vw;
  background: ${props => props.isDark ? props.theme.dark.background : props.theme.light.background};
  border-bottom: 1px solid #d1d1d2;
`
const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  width:100%;
  z-index: 20;
  padding: 0 3vw;
  background: ${props => props.isDark ? props.theme.dark.background : props.theme.light.background};
`

const NavBar = () => {
  const {state} = useContext(Context)
    return(
      <>
        <FixedTop isDark={state.isDark}>
          <Flex>
            <Avatar />
            <Box mx='auto' />
            <ToggleDarkMode />
          </Flex>
        </FixedTop>
        <FixedBottom isDark={state.isDark}>
          <Navigation />
        </FixedBottom>
      </>
    )
}
export default NavBar