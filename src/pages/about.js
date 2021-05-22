import React from 'react';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Layout from '../components/Layout';
import Container from '../components/Container'
// import NesCard from '../components/NesCard';
import Cart from '../components/Cart';
import PageTitle from '../components/PageTitle'
import Techs from '../components/TechIUse'
import { graphql } from 'gatsby';
import Seo from '../components/Seo'

const Section = styled(motion.section)`
 padding:5vh 0;
 min-height: 100vh;
 position:relative;
 .about-bio {
  margin: 8vh 0;
 }
`
const FlexContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 margin-top: 5vh;
`
const FlexItem = styled.div`
 width:fit-content;
 margin: 5vh 0;
 margin-right: 2vw;
`
const projects = [
  {
    tag: "<span> Nuxtjs </span> <span> Vuetify </span> <span> Netlify </span>",
    slug: "https://elevatin.agency",
    excerpt: "digital web Agency.",
  },
  {
    tag: "<span> Gatsbyjs </span> <span> MaterialUi </span> <span> Netlify </span>",
    slug: "https://andt-dz.com",
    excerpt: "governement website.",
  },
]


const AboutPage = ({location, transitionStatus, entry, exit, data }) => {
  const path = location.pathname
  const { edges } = data.allFile

  return (
    <Layout>
      <Seo title="About"/>
        {
          typeof window !== `undefined` && 
          (
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
              }
            >
              <Container>
                  <PageTitle /> 
                  <div style={{
                    marginTop: "5vh",
                    paddingLeft: "5vw",
                  }}>
                    <motion.div
                    initial= {{ opacity: 0, x: 100  }}
                    animate= {{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-bio">
                      <p>
                        Welcome to my personal site where I drop things related to the web and specifically to the jamstack.
                      </p>
                      <p>I design and develop  webapp whith the focus on the speed and user experience.</p>
                    </motion.div>
                    <h3>tools i use.</h3>
                    <Techs />
                    <div style={{marginTop: "10vh"}}>
                      <h3>selected projects.</h3>
                      <FlexContainer>
                        {
                          projects.map((project, id) => {
                            project.img = edges.map(({node}) => {return node.childImageSharp.gatsbyImageData})
                            //add the image array as props to the project object
                            return (
                              <FlexItem key={id}>
                                <Cart
                                  key={id}
                                  slug={project.slug}
                                  excerpt={project.excerpt}
                                  thumbnail={project.img[id]}
                                  tag={project.tag}
                                />
                              </FlexItem>
                            )
                          })
                        }
                      </FlexContainer>
                    </div>
                  </div>
              </Container>
            </Section>
          )
        }
    </Layout>
  )
};


export const pageQuery = graphql`
query projectsImageQuery {
  allFile(filter: {relativeDirectory: {eq: "projects"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}
`

export default AboutPage;