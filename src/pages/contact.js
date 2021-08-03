import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Form from '../components/Form'
import { Flex, Box } from 'reflexbox/styled-components'
import Seo from '../components/Seo'
import { useContext } from 'react'
import Context from '../store/context'


const Section = styled(motion.section)`
padding:19vh 5vw;
min-height: 100vh;
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
            <Flex flexWrap='wrap'>
              <Box width={[1, 1, 1, 2/5]} mb={3} pl={3} display="flex" alignItems="center">
                <p>
                  Got a burning question regarding <b>Jamstack</b>,
                  Need a new <b>Website</b>, or just anything in general.
                  I am happy to talk.
                  Just send me a message using the form below or you can send me a DM on &nbsp;
                  <a
                    onMouseEnter = {()=> {
                      return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                    }}
                    onMouseLeave= {()=> {
                        return dispatch({ type: "TOGGLE_HOVERED_MODE" })
                      }} href="https://twitter.com/okuninoshi">
                    Twitter.
                  </a>
                </p>
              </Box>
              <Box width={[1, 1, 1, 3/5]}>
                <Form />
              </Box>
            </Flex>
        </Section>)
      }
    </Layout>
  )
};
export default ContactPage;






