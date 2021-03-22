import * as React from "react"
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Vid = styled(motion.div)`
width: 100%;
padding: 15vh 5vw;
border: 1px solid deeppink;
`


export default function Container({children}) {
  return (
    <Vid>
      {children}
    </Vid>
  )
}
