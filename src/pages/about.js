import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
// import { TransitionState } from 'gatsby-plugin-transition-link'
import Layout from '../components/Layout';
import Container from '../components/Container'
import NesCard from '../components/NesCard';
import PageTitle from '../components/PageTitle'

const Section = styled(motion.section)`
 padding:5vh 5vw;
 min-height: 100vh;

`
const WorkPage = ({ transitionStatus, entry, exit }) => {
  return (
    <Layout>
      <React.Fragment>
        {
          typeof window !== `undefined` && (
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
            <Container>
                <PageTitle />
                <div style={{
                  width:"100%",
                  height:"100%",
                  padding:"5vh 0",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}>
                  <NesCard
                  title="test"
                  slug="/"
                  excerpt="bla bla bla bla"
                  published="mm/dd/yyyy"
                   />
                   <NesCard
                  title="test"
                  slug="/"
                  excerpt="bla bla bla bla"
                  published="mm/dd/yyyy"
                   />
                   <NesCard
                  title="test"
                  slug="/"
                  excerpt="bla bla bla bla"
                  published="mm/dd/yyyy"
                   />
                </div>
            </Container>
          </Section>)
        }
      </React.Fragment>
    </Layout>
  )
};

export default WorkPage;