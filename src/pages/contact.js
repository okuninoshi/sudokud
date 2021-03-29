import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Form from '../components/Form'
import Container from '../components/Container'
import Seo from '../components/Seo'
import { useContext } from 'react'
import Context from '../store/context'


const Section = styled(motion.section)`
 padding:5vh 5vw;
 min-height:100vh;
 .twitter{
   font-size: 1rem;
   letter-spacing:2px;
 }
.rect-container{
  position: absolute;
  top:0;
  left:0;
  z-index: -1;
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .rect{
    transform-origin: 50%;
    position: absolute;
  } 
  .rect1{
    width:100vh;
    height:100vh;
    border: 2px solid ${props => props.theme.palette.purplePlum};
    left:calc(100% - 50vh);
    top:0;
  }
  .rect2{
    width: calc(100vh / 1.618);
    height: calc(100vh / 1.618);
    border: 2px solid ${props => props.theme.palette.chinaPink};
    left: calc(100% - (50vh / 1.618));
  }
  .rect3{
    width: calc(100vh / (1.618*2));
    height: calc(100vh / (1.618*2));
    border: 2px solid ${props => props.theme.palette.macaroniAndChees};
    left: calc(100% - (50vh / (1.618*2)));
  }
  .rect4{
    width: calc(100vh / (1.618*4));
    height: calc(100vh / (1.618*4));
    border: 2px solid ${props => props.theme.palette.keyLime};
    left: calc(100% - (50vh / (1.618*4)));
  }
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
          <Container>
            <div style={{
              margin: 'auto',
              maxWidth: '70vw',
            }}>
                <p>
                    Got a burning question regarding <em>Jamstack</em>,
                    Need a new <em>Website</em>, or just anything in general.
                    I am happy to talk.
                </p>
                <p>
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
            </div>
            <div id="main-form">
                <Form />
            </div>
            </Container>
            <div className="rect-container">
              <Rect />
            </div>
        </Section>)
      }
    </Layout>
  )
};
const rect =["rect1", "rect2" , "rect3", "rect4"]
const Rect = () => {
  return(
    <React.Fragment>
      {rect.map((item, id) => {
        return(
          <motion.div
          key={id}
          initial={{
            scale:0,
          }}
          animate={{
            scale:1,
            rotate: 45 + (45 * id),
          }}
          transition={{
            type: "spring",
            mass:15,
            damping:70,
            delay: 0.4 * id
          }}
          className={`rect ${item}`}></motion.div>
          )
        })
      }
  </React.Fragment>
  )
}
export default ContactPage;






