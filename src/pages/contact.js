import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import { Grid } from '@geist-ui/react'
import Form from '../components/Form'
// import Container from '../components/Container'
import Seo from '../components/Seo'
import { useContext } from 'react'
import Context from '../store/context'


const Section = styled(motion.section)`
padding:5vh 5vw;
height:100vh;
.twitter{
  font-size: 1rem;
  letter-spacing:2px;
  font-style: italic;
}
`
const ContactPage = ({location, transitionStatus, entry, exit }) => {
  const path = location.pathname
  const { dispatch } = useContext(Context)

  return (
    <Layout pathname={path}>
      <Seo title="Contact"/>
      { typeof window !== `undefined` && (
        <Section 
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
            ? { x: 2000 }
            : { x: 0 }
          }
          transition={
            transitionStatus === "exiting"
            ? {duration: exit.length}
            : {duration: 0.5}
          }>
          <Grid.Container style={{height:"100%"}}>
            <Grid xs={24} md={9} justify="center" alignItems="center">
              <p style={{textAlign:"center"}}>
                Got a burning question regarding <em>Jamstack</em>,
                Need a new <em>Website</em>, or just anything in general.
                I am happy to talk.
                Just send me a message using the form below or you can send me a DM on &nbsp;
                <a
                  onMouseEnter = {()=> {
                    return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                  }}
                  onMouseLeave= {()=> {
                      return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                    }} className="twitter" href="https://twitter.com/okuninoshi">
                  Twitter.
                </a>
              </p>
            </Grid>
            <Grid xs={24} md={15} justify="center" alignItems="center">
              <div id="main-form">
                <Form />
              </div>
            </Grid>
          </Grid.Container>
        </Section>)
      }
    </Layout>
  )
};
export default ContactPage;






