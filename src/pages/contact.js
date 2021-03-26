import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Form from '../components/Form'
import Container from '../components/Container'




const Section = styled(motion.section)`
 padding:5vh 5vw;
 min-height:100vh;
`
const ContactPage = ({location, transitionStatus, entry, exit }) => {
  const path = location.pathname
  return (
    <Layout pathname={path}>
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
            <div style={{
              margin: 'auto',
              maxWidth: '75vw',
            }}>
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
            {/* <Circles /> */}
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
            rotate: 45,
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
export default ContactPage;






