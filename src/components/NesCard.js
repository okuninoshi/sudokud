import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import useSound from 'use-sound'
const Card = styled(motion.div)`
    position:relative;
    width:270px;
    height:420px;
    padding:16px;
    box-shadow: -16px 14px 6px 0 ${props => props.isDark ? "#0e0e0e" : "#808080"};
    &:after{
        content:"";
        position:absolute;
        bottom:-10px;
        left:0px;
        width:270px;
        height:10px;
        background: ${props => props.isDark ? '#141212' : 'lightgray' };
        transition: all 0.25s ease;
    }
    &:hover{
        box-shadow:none;
        transform: scale(0.97) translate(0px, 10px);
    }
    &:hover:after{
        transform: translate(0px, -11px);
        height:0;
    }
    transition: all 0.3s ease;
    .published{
        font-size: 15px;
        padding: 3px;
        color: ${props => props.theme.palette.Liberty};
    }
`
const CardBody = styled.div`
    clip-path: polygon(0% 0%, 100% 0, 100% 75%, 0% 95%);
    padding:0;
`
const CardFooter = styled.div`
    width:100%;
    .footer-content{
        transform: rotate3D(0, 0, 1, -7.7deg);
        transform-origin:left top;
    }
    .title{
        color:${props => props.theme.palette.chinaPink};
    }
    .excerpt{
        color:${props => props.theme.palette.purplePlum};
        font-size: calc(8px + 1vw);
        }

`


const NesCard = ({ title, slug, excerpt }) => {
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
                    <StaticImage src="../images/portrait.png" alt={title} />
                </CardBody>
                <CardFooter>
                    <div className="footer-content">
                        <h2 className="title">{title}</h2>
                        <p className="excerpt"> {excerpt} </p>
                    </div>
                </CardFooter>
            </Card>
        </a>
    )
}
export default NesCard