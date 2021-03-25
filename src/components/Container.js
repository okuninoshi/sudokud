import * as React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Vid = styled(motion.div)`
width: 100%;
padding: 15vh 0;
/* border: 1px solid deeppink; */
`
const container = {
	hidden: { opacity: 0 },
	show: {
	  opacity: 1,
	  transition: {
		staggerChildren: 0.05,
	  }
	}
}

export default function Container({children}) {
  return (
    <Vid 
      variants={container}
      initial="hidden"
      animate="show">
      {children}
    </Vid>
  )
}
