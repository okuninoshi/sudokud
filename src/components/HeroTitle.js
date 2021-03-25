import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import { useContext } from 'react'
// import Context from '../store/context'


const TitleContainer = styled.div`
  width: 100%;
  height:calc(8rem + 18vw);
	user-select: none;
  overflow-y: hidden;
  position: relative;
`
const TitleLg = styled(motion.h1)`
  display:flex;
  .hero-greating {
    font-size: calc(8rem + 15vw);
    position: relative;
    color:${props => props.theme.palette.chinaPink};
  }
  .hero-name {
    font-size: calc(1.5rem + 3vw);
    float: left;
  }
  @media screen and (max-width: 600px){
    margin-left: -5vw;
  }
`

const container = {
	hidden: { opacity: 0 },
	show: {
    opacity: 1,
	  transition: {
		staggerChildren: 0.08,
	  }
	}
}
  
const GreatingItem = {
hidden: { opacity: 0, top: 500 },
show: {
    opacity: 1,
    top: 0,
    transition: {
        type: "spring",
        mass: 1,
        stiffness: 20,
    }
  }
}
const NameItem = {
  hidden: { opacity: 0, y: 400 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
        type: "spring",
        mass: 1,
        stiffness: 20,
    }
  }
}

const HeroTitle = () => {
  // const { state, dispatch } = useContext(Context)
  return (
	<TitleContainer>
        <TitleLg
            variants={container}
            initial="hidden"
            animate="show"
            // onMouseEnter= {()=> {
            //   return dispatch({ type: "TOGGLE_HOVERED_MODE" })
            // }}
            // onMouseLeave= {()=> {
            //     return dispatch({ type: "TOGGLE_HOVERED_MODE" })
            // }} 
            >
               
              <motion.span className="hero-greating" variants={GreatingItem}> HI </motion.span>
              <div style={{
                // border: "1px solid cyan",
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end',
                padding:'9vh 0'
              }}>
                <motion.div className="hero-name" variants={NameItem}>I'm</motion.div>
                <div>
                  <motion.span className="hero-name" variants={NameItem}>Ha</motion.span>
                  <motion.span className="hero-name" variants={NameItem}>mz</motion.span>
                  <motion.span className="hero-name" variants={NameItem}>a</motion.span>
                </div>
              </div>
        </TitleLg>
    </TitleContainer>
  )
}

export default HeroTitle
