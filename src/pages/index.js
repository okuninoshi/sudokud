import React from 'react'
// import {useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'

import styled from 'styled-components'
// import { TransitionState } from 'gatsby-plugin-transition-link'
import Layout from '../components/Layout';
// import { TransitionPortal } from "gatsby-plugin-transition-link";




const Section = styled(motion.section)`
 height: 100vh;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 h1{
   margin:8px 1rem;
 }
`
const HomePage = ({ transitionStatus, exit, entry }) => {
  return (
    <Layout>
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
              <h1>
                Chetoui Hamza
              </h1>
              <h5>web developer, a designer, and a JAMSTACK enthusiast</h5>
          </Container>
        </Section>)
      }
    </Layout>
  )
};

export default HomePage;