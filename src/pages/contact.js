import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Form from '../components/Form'
import Container from '../components/Container'




const Section = styled(motion.section)`
 padding:5vh 5vw;
 min-height: 100vh;
`
const ContactPage = ({ transitionStatus, entry, exit }) => {
  return (
    <Layout>
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
          <Container>
            <div>
                <p>
                    Got a burning question regarding <em>JAMStack</em>,
                    Need a new <em>Website</em>, or just anything in general.
                    I am happy to talk.
                </p>
                <p>
                    Just send me a message using the form below or you can send me a DM on &nbsp;
                    <a className="mx-2" href="https://twitter.com/okuninoshi">Twitter.</a>
                </p>
            </div>
            <div id="main-form">
                <Form />
            </div>
            </Container>
        </Section>)
      }
    </Layout>
  )
};

export default ContactPage;






