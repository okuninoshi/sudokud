import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import avatar from '../images/portrait.png'


const AvatarContainer = styled(motion.div)`
border-radius: 50%;
width: calc(28px + 2.5vw);
height: calc(28px + 2.5vw);
overflow: hidden;
`


const Avatar = () => {
    return (
    <AvatarContainer>
        <img width="100%" src={avatar} alt="avatar" />
    </AvatarContainer>
    )
}

export default Avatar