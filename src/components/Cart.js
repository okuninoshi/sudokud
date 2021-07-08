import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'

const CardStyles = styled(motion.a)`
    height: 245px;
    width: 285px;
    overflow: hidden;
    position: relative;
    border-radius: 13px;
    color: ${props => props.isDark ? props.theme.dark.text : props.theme.dark.background};
    box-shadow: 0 3px 6px -2px rgb(0 10 60 / 20%);
`
const Card = styled.article`

`
const Footer = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 52px;
background:${props => props.isDark ? props.theme.dark.background : props.theme.dark.text};
display: flex;
align-items: flex-end;
.tag-container{
    height: 100%;
    display: flex;
    align-items: center;
    span{
        padding: 5px;
        border-radius: 13px;
        border:2px solid ${props => props.theme.palette.chinaPink};
        margin:0 4px;
        font-size: 0.65rem;
    }
}
`

const Cart = ({ slug, thumbnail, tag }) => {
    const { state } = useContext(Context)
    const image = getImage(thumbnail)
    return (
        <CardStyles isDark={state.isDark} href={slug}>
            <Card>
                <GatsbyImage image={image} alt={slug} />
                <Footer isDark={state.isDark}>
                    <div className="tag-container" dangerouslySetInnerHTML= {{__html: tag}} />
                </Footer>
            </Card>
        </CardStyles>
    )
}
export default Cart