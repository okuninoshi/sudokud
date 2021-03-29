
import { createGlobalStyle } from 'styled-components'
import '../css/typo.css'
const GlobalStyle = createGlobalStyle`
  * > * {
    box-sizing: border-box;
  }
  body{
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    color:${props => (props.isDark ? props.theme.dark.text : props.theme.dark.background)};
    margin:0;
    padding:0;
    background:${props => (props.isDark ? props.theme.dark.background : props.theme.light.background)};
    overflow-x: hidden;
  }
  h1, h2, h3, h5{
    font-family: 'Marvin Visions', sans-serif,;
    letter-spacing: 1.5px;
    margin: 0;
  }
  h1{
    font-size: calc(1.4rem + 7vw);
  }
  h3{
    font-size: calc(1rem + 2vw);
  }
  h5{
    font-size: calc(1rem + 1vw);
  }
  p{
    font-size: calc(0.625rem + 1vw);
    line-height: calc(0.625rem + 1.8vw);
    margin: 0;
  }
  a{
    color: ${props => props.theme.palette.chinaPink};
    text-decoration: none;
    font-family: 'Marvin Visions', sans-serif;
    letter-spacing: 1.2px;
  }
`
export default GlobalStyle