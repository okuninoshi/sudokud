import React from "react"
import { useContext } from 'react'
import styled from 'styled-components'
import Context from '../store/context'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const Classes = styled.div`
    background:${props => props.isDark ? "#1c1124" : "#f2f2f3"};
    .container{
        padding:32px;
        margin-top:32px;
    }
`

const Footer = () => {
    const { state } = useContext(Context)

    return (
        <Classes isDark={state.isDark}>
            <div fluid="lg" className="container">
                <div noGutters className="d-flex justify-content-center my-3">
                    <a href="https://instagram.com/sudokud">
                        <FaGithub color="#f2f2f3" fontSize="24px" />
                    </a>
                    <a href="https://twitter.com/okuninoshi">
                        <FaTwitter color="#f2f2f3" fontSize="24px" />
                    </a>
                    <a href="https://github.com/okuninoshi">
                        <FaInstagram color="#f2f2f3" fontSize="24px" />
                    </a>
                </div>
                <div  className="">
                    <p className="">
                        © 2020-present chetoui hamza. All right reserved
                    </p>
                </div>
                <div  className="">
                    <p>Made with</p>
                    <span className="">
                        <img
                            width="31px" height="26,7px"
                            // src={state.isDark ? "/img/dark_heart.gif" : "/img/light_heart.gif"}
                            src="#"
                            alt="❤️" />
                    </span>
                    <p>and Passion</p>
                </div>
            </div>
        </Classes>
    )
}

export default Footer
