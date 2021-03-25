import React from "react"
import { useContext } from "react"
import Context from '../../store/context'
import styled from "styled-components"
import SwitchMode from './SwitchMode'

const Classes = styled.div`
.switch {
    width: 35px;
    height: 35px;
    position:relative;
    display: flex;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
  }

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
    <Classes>
      <div
        className="switch"
        onClick={toggleSwitch}
        role="button"
        data-toggle="tooltip" data-placement="bottom" title={state.isDark ? "Light mode" : "Dark mode"}
        tabIndex="0">
          <SwitchMode isDark={state.isDark}/>
      </div>
    </Classes>
  )
}

export default ToggleDarkMode
