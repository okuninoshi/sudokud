import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'


const TitleContainer = styled.div`
  width: 100%;
  height:calc(8rem + 18vw);
  padding-left: 5vw;
  display:flex;
  align-items: center;
`
const TitleLg = styled(motion.h1)`
  display:flex;
  position: relative;
  z-index:1;
  overflow-y: hidden;
  .hero-greating {
    font-size: calc(12rem + 15vw);
    line-height: calc(7.8rem + 9.2vw);
    position: relative;
  }
  .hero-name_container {    
    position: relative;
    overflow: hidden;
    z-index: -1;
    .hero-name_item {
      font-size: calc(1.6rem + 2.6vw);
      line-height: calc(2rem + 2.2vw);
      writing-mode: vertical-lr;
      margin-left: 8px;
    }
    .hamza{
      margin-top: 8px;
    }
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
hidden: { opacity: 0, top: "50vh" },
show: {
    opacity: 1,
    top: 0,
    transition: {
        type: "spring",
        mass: 1,
        stiffness: 25,
    }
  }
}
const NameItem = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
        type: "spring",
        mass: 1,
        stiffness: 25,
        delay: 0.8,
    }
  }
}

const HeroTitle = () => {
  return (
	<TitleContainer>
        <TitleLg
            variants={container}
            initial="hidden"
            animate="show"
            >
            <motion.span className="hero-greating" variants={GreatingItem}> H </motion.span>
            <div className="hero-name_container">
              <motion.div className="hero-name_item" variants={NameItem}>I'm</motion.div>
              <div className="hamza">
                <motion.div className="hero-name_item" variants={NameItem}>Ha</motion.div>
                <motion.div className="hero-name_item" variants={NameItem}>mz</motion.div>
                <motion.div className="hero-name_item" variants={NameItem}>a</motion.div>
              </div>
            </div>
        </TitleLg>
    </TitleContainer>
  )
}

export default HeroTitle
