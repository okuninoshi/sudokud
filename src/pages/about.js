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
 .about-bio {
  margin: 8vh 0;
 }
 .tools-container{
  display: flex;
  padding-left: 5vw;
  margin-top: 3vh;
  flex-wrap: wrap;
 .tool{
  border-radius: 4px;
  padding: 4px 8px;
  margin:12px;
 } 
 }
`
const FlexContainer = styled.div`
 display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 margin-top: 5vh;
`
const FlexItem = styled.div`
 width:fit-content;
`
const projects = [ 0, 1, 2]
const tools = [ {name: "Reactjs", color:"#61dafb"},
                {name: "Vuejs", color:"#42b983"},
                {name: "Gatsbyjs", color:"#663399"},
                {name: "Netlify", color:"#15847d"},
                {name: "Netlify-cms", color:"#c9fa4b"},
                {name: "Nuxtjs", color:"#2ec58d"},
                {name: "Strapijs", color:"#9179ff"},
                {name: "Graphql", color:"#e00097"}]
const AboutPage = ({location, transitionStatus, entry, exit }) => {
  const path = location.pathname
  return (
    <Layout pathname={path}>
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
                  marginTop: "5vh",
                  paddingLeft: "5vw",
                }}>
                  <div className="about-bio">
                    <p>
                      Welcome to my personal site where I drop things related to the web and specifically to the jamstack.
                    </p>
                    <p>I categorize my self as a frontend developer. <i>well that was::before the jamstack.</i></p>
                    <p>I design and develop  webapp whith the focus on the speed and user experience.</p>
                  </div>
                  <h3>tools i use.</h3>
                  <div className="tools-container">
                    {tools.map(({name, color} ,id) => {
                      return(<p style={{
                        border: `2px solid ${color}`,
                      }} key={id} className={`tool ${name}`}>{name}</p>)})
                    }
                  </div>
                  <div style={{marginTop: "10vh"}}>
                    <h3>selected projects.</h3>
                    <FlexContainer>
                      {
                        projects.map(id => {
                          return (
                            <FlexItem key={id}>
                            <NesCard
                            title="andt"
                            slug="https://andt-dz.com"
                            excerpt="web app powered by gatsby js and netlify cms"
                            thumbnail="../images/portrait.png"
                            />
                          </FlexItem>
                      )})
                    }
                    </FlexContainer>
                  </div>
                </div>
            </Container>
          </Section>)
        }
      </React.Fragment>
    </Layout>
  )
};

export default AboutPage;