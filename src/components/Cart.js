import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {Card, Link} from '@geist-ui/react'

const Styles = styled(motion.div)`
&& .card_body{
    color: ${props => props.isDark ? props.theme.dark.text : props.theme.dark.background};
}
 .tag-container{
    font-size: 12px;
    margin-top: 2vh;
    span{
        padding: 4px;
        border-radius: 4px;
        margin:0 4px;
        color:${props => props.theme.palette.purplePlum};
        background: ${props => props.theme.light.macaroniAndChees};
    }
}
`

const Cart = ({ slug, thumbnail, tag }) => {
    const { state } = useContext(Context)
    return (
        <Styles isDark={state.isDark}>
            <Card width="330px" className="card_body" hoverable>
                <GatsbyImage image={thumbnail} alt={slug} />
                <div className="tag-container" dangerouslySetInnerHTML= {{__html: tag}} />
                <Card.Footer>
                    <Link block target="_blank" href={slug}>Visit site.</Link>
                </Card.Footer>
            </Card>
        </Styles>
    )
}
export default Cart