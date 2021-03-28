import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Container = styled.div`
position:absolute;
z-index:-1;
top: 0;
left:0;
pointer-events: none;
width: 100vw;
height: 100vh;
path{
    transform-origin: 50%;
}
`

const container = {
	hidden: { opacity: 0 },
	show: {
    opacity: 1,
	  transition: {
		staggerChildren: 0.2,
	  }
	}
}
  
const child = {
hidden: { scale: 0.5, rotate:0 },
show: {
    rotate:360,
    scale: 1,
    transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 3,
    }
  }
}
const Triangles = () => {
    return(
        <Container>
            <motion.svg variants={container} initial="hidden" animate="show"
              width="100%" height="100%" viewBox="0 0 348 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                variants={child}
                 d="M2.52697 299L174 2L345.473 299H2.52697Z" stroke="#985DA8" stroke-width="0.5"/>
                <motion.path
                variants={child}
                d="M46.6943 273.5L174 53L301.306 273.5H46.6943Z" stroke="#D97192" stroke-width="0.5"/>
                <motion.path
                variants={child}
                d="M77.0052 256L174 88L270.995 256H77.0052Z" stroke="#FAB589" stroke-width="0.5"/>
                <motion.path
                variants={child}
                d="M102.986 241L174 118L245.014 241H102.986Z" stroke="#F2FF8F" stroke-width="0.5"/>
            </motion.svg>
        </Container>
    )
}


export default Triangles