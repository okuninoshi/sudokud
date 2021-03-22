import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Form from '../components/Form'




const Section = styled(motion.section)`
 height: 100vh;
 padding:5vh 5vw;
`
const ContactPage = ({ transitionStatus, entry, exit }) => {
  return (
    <Layout>
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
        <div>
          <div>
              <h1> Get in touch </h1>
          </div>
          <div>
              <p>
                  Got a burning question regarding <em>JAMStack</em>,
                  Need a new <em>Website</em>, or just anything in general.
                  I am happy to talk.
              </p>
              <p>
                  Just send me a message using the form below or you can send me a DM on
                  <a className="mx-2" href="https://twitter.com/okuninoshi">Twitter.</a>
              </p>
          </div>
          <div id="main-form">
              <Form />
          </div>
          </div>
      </Section>
    </Layout>
  )
};

export default ContactPage;






