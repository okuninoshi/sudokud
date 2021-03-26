import React from 'react'
// import {useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import HeroTitle from '../components/HeroTitle'
import styled from 'styled-components'
// import { TransitionState } from 'gatsby-plugin-transition-link'
import Layout from '../components/Layout';
// import { TransitionPortal } from "gatsby-plugin-transition-link";




const Section = styled(motion.section)`
 padding:5vh 5vw;
 min-height: 100vh;
 position: relative;
 z-index:1;
 .hero-about-me {
  text-align: left;
  padding-left: 2vw;
 }
 .circle{
  transform-origin: 50%;
  border-radius: 50%;
  z-index: -1;
  top:50%;
  position: absolute;
 }
 .circle1{
  width:100vh;
  height:100vh;
  background: ${props => props.theme.palette.purplePlum};
  left:calc(100% - 50vh);
 }
 .circle2{
  width: calc(100vh / 1.618);
  height: calc(100vh / 1.618);
  background: ${props => props.theme.palette.chinaPink};
  left: calc(100% - (50vh / 1.618));
 }
 .circle3{
  width: calc(100vh / (1.618*2));
  height: calc(100vh / (1.618*2));
  background: ${props => props.theme.palette.macaroniAndChees};
  left: calc(100% - (50vh / (1.618*2)));
 }
 .circle4{
  width: calc(100vh / (1.618*4));
  height: calc(100vh / (1.618*4));
  background: ${props => props.theme.palette.keyLime};
  left: calc(100% - (50vh / (1.618*4)));
 }
`
const item = {
	hidden: { opacity: 0, x: 200 },
	show: {
      opacity: 1,
      x: 0,
      transition: {
          type: "spring",
          mass: 1,
          stiffness: 15,
      } 
  }
}
const HomePage = ({ location, transitionStatus, exit, entry }) => {
  const path = location.pathname
  return (
    <Layout pathname={path}>
      {
        typeof window !== `undefined` && (
        <Section 
        initial={entry.state }
        animate={
          transitionStatus === "exiting"
          ? { x: exit.state.x}
          : { x: 0 }
        }
        transition={
          transitionStatus === "exiting"
          ? {duration: exit.length}
          : {duration: 0.5}
        }>
          <Container>
            <HeroTitle />
            <motion.p className="hero-about-me" variants={item}>web developer, a designer, and a JAMSTACK enthusiast</motion.p>
          </Container>
          <Circles/>
        </Section>)
      }
    </Layout>
  )
};

const circles =["circle1", "circle2" , "circle3", "circle4"]
const Circles = () => {
  return(
    <React.Fragment>
      {circles.map((item, id) => {
        return(
          <motion.div
          key={id}
          initial={{
            scale:0,
            translateY: "-50%",
          }}
          animate={{
            scale:1,
          }}
          transition={{
            type: "spring",
            mass:15,
            damping:70,
            delay: 0.4 * id,
          }}
          className={`circle ${item}`}></motion.div>
          )
        })
      }
  </React.Fragment>
  )
}

export default HomePage;