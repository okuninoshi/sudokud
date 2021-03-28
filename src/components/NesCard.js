import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import useSound from 'use-sound'
const Card = styled(motion.div)`
    position:relative;
    width: 280px;
    height: 380px;
    padding:16px;
    box-shadow: -16px 14px 6px 0 ${props => props.isDark ? "#0e0e0e" : "#808080"};
    color: ${props => props.isDark ? props.theme.dark.text : props.theme.dark.background};
    transition: all 0.3s ease;‚
    &:after{
        content:"";
        position:absolute;
        bottom:-10px;
        left:0px;
        width:100%;
        height:10px;
        background: ${props => props.isDark ? '#141212' : 'lightgray' };
        transition: all 0.25s ease;
    }
    &:hover{
        box-shadow: none;
        transform: scale(0.97) translate(0px, 10px);
    }
    &:hover:after{
        transform: translate(0px, -11px);
        height: 0;
    }
`
const CardBody = styled.div`
    clip-path: polygon(0% 0%, 100% 0, 100% 75%, 0% 95%);
`
const CardFooter = styled.div`
    width:100%;
    .footer-content{
        transform: rotate3D(0, 0, 1, -7.7deg);
        transform-origin:left top;
    }
    .title{
        color: inherit;
    }
    .excerpt{
        color: inherit;
        font-size: calc(8px + 1vw);
    }
    .tag-container{
        position: absolute;
        bottom: 8px;
        font-size: 14px;
        span{
            padding: 2px;
            border-radius: 4px;
            margin:0 4px;
            color:${props => props.theme.palette.macaroniAndChees};
        }
    }

`


const NesCard = ({ title, slug, excerpt, thumbnail, tag }) => {
    const { state } = useContext(Context)
    // const [POP] = useSound(
    //     'audio/hoverIn.wav', { volume: 0.5 }
    // )
    return (
        <a href={`${slug}`}>
            <Card isDark={state.isDark}
                // onHoverEnd={() => (POP())}
            >
                {/* <time className="published"> {published} </time> */}
                <CardBody>
                    <GatsbyImage image={thumbnail} alt={title} />
                </CardBody>
                <CardFooter>
                    <div className="footer-content">
                        <h2 className="title">{title}</h2>
                        <p className="excerpt"> {excerpt} </p>
                    </div>
                    <div className="tag-container" dangerouslySetInnerHTML= {{__html: tag}} />
                </CardFooter>
            </Card>
        </a>
    )
}
export default NesCard