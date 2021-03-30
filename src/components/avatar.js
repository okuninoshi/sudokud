import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"


const AvatarContainer = styled(motion.div)`
width: calc(35px + 2.5vw);
height: calc(35px + 2.5vw);
`


const Avatar = () => {
    return (
    <AvatarContainer>
        <StaticImage src="../images/icon.png" alt='avatar' placeholder="blured"/>
    </AvatarContainer>
    )
}

export default Avatar