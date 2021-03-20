import React from "react"
import { useContext } from "react"
import Context from '../../store/context'
import styled from "styled-components"
import NintendoSwitchButton from './ToggleDarkModeSvg'

const Classes = styled.div`

.switch {
    width: 35px;
    height: 35px;
    display: flex;
    cursor: pointer;
    margin: 0 8px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
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
        data-toggle="tooltip" data-placement="bottom" title={state.isDark ? "Cold mode" : "Warm mode"}
        tabIndex="0">
          <NintendoSwitchButton isDark={state.isDark}/>
        </div>
    </Classes>
  )
}

export default ToggleDarkMode
