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
import {Grid, Text, Spacer} from '@geist-ui/react'
const Section = styled(motion.section)`&&{
 padding:5vh 0;
 min-height: 100vh;
 position:relative;
 .about-bio, h3 {
  margin-left: 3vw;
 }
}`
const projects = [
  {
    tag: "<span> Nuxtjs </span> <span> Vuetify </span> <span> Netlify </span>",
    slug: "https://elevatin.agency",
    excerpt: "digital web Agency.",
  },
  {
    tag: "<span> Gatsbyjs </span> <span> MaterialUi </span> <span> Netlify-cms </span>",
    slug: "https://andt-dz.com",
    excerpt: "governement website.",
  },
]


const AboutPage = ({ transitionStatus, entry, exit, data }) => {
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
                  <Spacer y={2}/>
                  <motion.div
                    initial= {{ opacity: 0, x: 100  }}
                    animate= {{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-bio"
                  >
                    <Text p>
                      Welcome to my personal site where I drop things related to the web and specifically to the jamstack.
                    </Text>
                    <Text p>I design and develop  webapp whith the focus on the speed and user experience.</Text>
                  </motion.div>
                  <Spacer y={5}/>
                  <Text h3>tools i'm the moust confortable with.</Text>
                  <Spacer y={2}/>
                  <Techs />
                  <Spacer y={5}/>
                  <Text h3>some work !</Text>
                  <Spacer y={2}/>
                  <Grid.Container gap={2.5} justify="center">
                    {
                      projects.map((project, id) => {
                        project.img = edges.map(({node}) => {return node.childImageSharp.gatsbyImageData})
                        //add the image array as props to the project object
                        return (
                          <Grid justify="center" key={id} xs={24} sm={12} md={8} lg={6}>
                            <Cart
                              key={id}
                              slug={project.slug}
                              excerpt={project.excerpt}
                              thumbnail={project.img[id]}
                              tag={project.tag}
                            />
                          </Grid>
                        )
                      })
                    }
                  </Grid.Container>
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