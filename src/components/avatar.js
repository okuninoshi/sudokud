import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { StaticImage } from "gatsby-plugin-image"


const AvatarContainer = styled(motion.div)`
border-radius: 50%;
width: calc(28px + 2.5vw);
height: calc(28px + 2.5vw);
overflow: hidden;
`


const Avatar = () => {
    return (
    <AvatarContainer>
        <StaticImage src="../images/avatar-small.png" alt='avatar' />
    </AvatarContainer>
    )
}

export default Avatar