import * as React from "react"
import Layout from '../components/Layout'
import PrimaryButton from '../components/buttons/PrimaryButton'
import ToggleDarkMode from '../components/buttons/ToggleDarkMode'
import { motion } from "framer-motion"

const IndexPage = () => {
  return (
    <Layout>
      <motion.div 
      initial={{
        opacity: 0,
        y: 300
      }}
       animate={{
         opacity: 1,
         y: 0,
       }}
       exit={{
         opacity: 0,
         y: 300,
       }}
      key="home">
        <title>Home Page</title>
        <h1>Hello World</h1>
        <PrimaryButton>test</PrimaryButton>
        <ToggleDarkMode />
      </motion.div>
    </Layout>
  )
}

export default IndexPage
