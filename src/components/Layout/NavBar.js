import React from 'react'
import Avatar from "./avatar"
import ToggleDarkMode from '../buttons/ToggleDarkMode'
import Navigation from './Navigation'
import { Grid } from '@geist-ui/react'
import { useContext } from 'react'
import Context from '../../store/context'
import styled from 'styled-components'

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
  padding: 2vh 3vw;
  background: ${props => props.isDark ? props.theme.dark.background : props.theme.light.background};
`

const NavBar = () => {
  const {state} = useContext(Context)
    return(
      <>
      <FixedTop isDark={state.isDark}>
        <Grid.Container>
          <Grid xs justify="flex-start">
            <Avatar />
          </Grid>
          <Grid xs justify="flex-end">
            <ToggleDarkMode />
          </Grid>
        </Grid.Container>
      </FixedTop>
      <FixedBottom isDark={state.isDark}>
        <Grid.Container>
          <Grid xs={24}>
            <Navigation />
          </Grid>
        </Grid.Container>
      </FixedBottom>
      </>
    )
}
export default NavBar