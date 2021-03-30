import React from "react"
import { useContext } from "react"
import Context from '../../store/context'
import styled from "styled-components"
import SwitchMode from './SwitchMode'

const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid transparent;
  padding:0;
  position:relative;
  display: flex;
  align-items:center;
  justify-content:center; 
`

const ToggleDarkMode = () => {
  const { state, dispatch } = useContext(Context)
//   const [playToggle] = useSound(
//     'audio/toggleDarkLightMode.wav', { volume: 0.25 }
//   )


  const toggleSwitch = () => {
    return (
      dispatch({ type: "TOGGLE_DARK_MODE" })
    //   playToggle()
    )
  }
  return (
    <Button
        onClick={toggleSwitch}
        data-toggle="tooltip" 
        data-placement="bottom" 
        title={state.isDark ? "Light mode" : "Dark mode"}
        >
          <SwitchMode isDark={state.isDark}/>
    </Button>
  )
}

export default ToggleDarkMode
