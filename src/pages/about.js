import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
// import { TransitionState } from 'gatsby-plugin-transition-link'
import Layout from '../components/Layout';





const Section = styled(motion.section)`
 height: 100vh;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content:center;
`
const AboutPage = ({ transitionStatus, entry, exit }) => {
  return (
    <Layout>
      <Section 
      initial={entry.state}
      animate={
        transitionStatus === "exiting"
        ? { x: -window.innerWidth }
        : { x: 0 }
      }
      transition={
        transitionStatus === "exiting"
        ? {duration: exit.length}
        : {duration: 0.5}
      }>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
        <h1>About</h1>
      </Section>
    </Layout>
  )
};

export default AboutPage;