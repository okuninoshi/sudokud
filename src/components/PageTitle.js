import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Title = styled(motion.h1)`
display: flex;
align-items: baseline;
overflow-y: hidden;
`
const container = {
	hidden: { opacity: 1 },
	show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.19,
        }
	}
}

const word = {
    hidden: { y: "15vh" },
    show: {
        y: 0,
        transition: {
            type: "spring",
            mass: 3,
            stiffness: 60,
            damping: 25,
        }
    }
}
const PageTitle = () => {
    return(
      
        <Title variants={container} initial="hidden" animate="show">
            {/* <motion.div className="bar" variants={bar}></motion.div> */}
            <motion.span className="word" variants={word}>Ab</motion.span>
            <motion.span className="word" variants={word}>out</motion.span>
        </Title>
        
    )
}

export default PageTitle