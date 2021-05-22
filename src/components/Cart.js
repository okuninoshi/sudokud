import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = styled(motion.div)`
    position:relative;
    color: ${props => props.isDark ? props.theme.dark.text : props.theme.dark.background};
`
const CardBody = styled.div`
    pointer-events: none;
    border-radius: 20px;
    overflow: hidden;
    width:300px;
    height:200px;
`
const CardFooter = styled.div`
    width:100%;
    margin-top:4vh;
    padding-left: 12px;
    .tag-container{
        font-size: 12px;
        span{
            padding: 4px;
            border-radius: 4px;
            margin:0 4px;
            color:${props => props.theme.palette.purplePlum};
            background: ${props => props.theme.light.macaroniAndChees};
        }
    }
    .excerpt{
        color: inherit;
        font-size: 1.3rem;
        margin-top:2vh;
        padding:6px;
    }

`

const Cart = ({ slug, excerpt, thumbnail, tag }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <motion.a 
            href={`${slug}`} 
            onMouseEnter= {()=> {
                return dispatch({ type: "TOGGLE_CARD" })
            }}
            onMouseLeave= {()=> {
                return dispatch({ type: "TOGGLE_CARD" })
            }}
        >
            <Card isDark={state.isDark}>
                <CardBody>
                    <div style={{transform: "scale(1.05)"}}>
                        <GatsbyImage image={thumbnail} alt={slug} />
                    </div>
                </CardBody>
                <CardFooter>
                    <div className="tag-container" dangerouslySetInnerHTML= {{__html: tag}} />
                    <div className="footer-content">
                        <p className="excerpt"> {excerpt} </p>
                    </div>
                </CardFooter>
            </Card>
        </motion.a>
    )
}
export default Cart