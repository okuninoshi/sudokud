import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'



const Title = styled(motion.h1)`
display: flex;
align-items: baseline;
overflow-y: hidden;
line-height: calc(1rem + 7vw);
padding-left: 2vw;
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
            <motion.span className="word" variants={word}>H</motion.span>
            <motion.span className="word" variants={word}>i&nbsp;</motion.span>
            <motion.span className="word" variants={word}>t</motion.span>
            <motion.span className="word" variants={word}>h</motion.span>
            <motion.span className="word" variants={word}>e</motion.span>
            <motion.span className="word" variants={word}>r</motion.span>
            <motion.span className="word" variants={word}>e</motion.span>
            <motion.span className="word" variants={word}>!</motion.span>
        </Title>
    )
}

export default PageTitle