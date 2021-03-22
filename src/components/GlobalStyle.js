
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
    cursor: none;
  }
  h1, h3, h5{
    font-family: 'knuckle down';
    letter-spacing: 2px;
    margin: 0;
  }
  h1{
    font-size: calc(1.4rem + 5vw);
  }
  h5{
    font-size: calc(1rem + 1vw);
  }
`
export default GlobalStyle