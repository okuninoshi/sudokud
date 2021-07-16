import React, { useRef } from 'react'
import { useContext, useState } from 'react'
import Context from '../store/context'
import styled from 'styled-components'
// import useSound from 'use-sound'
import {motion} from 'framer-motion'
import FancadeButton from './buttons/FancadeStyleButton'
import { useForm } from 'react-hook-form'
import  axios from  'axios'
import useClickAway from '../hooks/useClickAway'

const Faurme = styled.form`
position: relative;
display: flex; 
flex-direction: column;
margin: auto;
max-width: calc(200px + 50vw);
.button-container {
    margin: auto;
    margin-top: 16px;
    width: calc(200px + 25vw);
    display: flex;
}
`
const FaurmeGroup = styled(motion.div)`
margin: auto;
display: flex;
flex-direction: column;
padding: 3vh 0;
label {
    padding: 6px;
    margin-bottom: -2px;
    width: fit-content;
    font-size: 1.2rem;
}
input {
    padding: 6px 8px;
    border-radius:3px;
    border: 0.5px solid ${props => props.theme.palette.chinaPink};
    color: ${props => props.theme.dark.text};
    width: calc(200px + 25vw);
    height: 48px;
    background: ${props => props.theme.dark.background};
    cursor: none;
}
input:focus{
outline-style: dashed;
outline-width: 2px;
outline-color: ${props => props.theme.palette.purplePlum};
}
textarea{
    padding: 6px 8px;
    border-radius:3px;
    border: none;
    width: calc(200px + 25vw);
    height: 67px;
    color: ${props => props.theme.dark.text};
    background: ${props => props.theme.dark.background};
    border: 0.5px solid ${props => props.theme.palette.chinaPink};
    cursor: none;
}
textarea:focus{
outline-style: dashed;
outline-width: 2px;
outline-color: ${props => props.theme.palette.purplePlum};
}
.error-message{
    color: crimson;
    padding: 8px 0;
    font-size: 16px;
}
`
const Form = () => {
    const { state, dispatch } = useContext(Context)
    const [status, setStatus ] = useState(null)
    const ref = useRef(null)
    useClickAway(ref, () => {
        //reset status to null when clicked outside the alert
        setStatus('')
      });
    const {register, handleSubmit, errors, watch, reset} = useForm()
    const Email = watch('email')
    const Message = watch('message')

    function onSubmit(data, e) {
        axios({ url: 'https://formspree.io/f/mwkaewql',
            method: 'post',
            headers: {'Accept': 'application/json'},
            data: data })
        .then((response) => { setStatus(response.status) })
        e.preventDefault();
        e.target.reset();
        reset({email: "", message: "" });
    }
    return (
        <Faurme
            name="sudokud"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
            isDark={state.isDark}
        >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    don't fill this out: <input name="bot-field" />
                </label>
            </p>
            <FaurmeGroup 
                isDark={state.isDark}
                initial={{opacity: 0, y: 16 }} 
                animate={{ opacity:1, y: 0 }} 
                transition={{
                    duration: 1.6,
                }}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@sample.xyz"
                    ref={register({required: true})}
                    onMouseEnter= {()=> {
                        return dispatch({ type: "TOGGLE_INPUT" })
                        }}
                    onMouseLeave= {()=> {
                        return dispatch({ type: "TOGGLE_INPUT" })
                    }}
                />      
                {errors.email && <p className="error-message">email is required</p>}
            </FaurmeGroup>
            <FaurmeGroup 
                isDark={state.isDark}
                initial={{opacity: 0, y: 48 }} 
                animate={{ opacity:1, y: 0 }} 
                transition={{
                    duration: 1.6,
                }}
                >
                <label htmlFor="message">Message</label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Hello world"
                    ref={register({ required: true, minLength: 5})}
                    onMouseEnter= {()=> {
                        return dispatch({ type: "TOGGLE_INPUT" })
                        }}
                    onMouseLeave= {()=> {
                        return dispatch({ type: "TOGGLE_INPUT" })
                    }}
                />
                {errors.message && <p className="error-message">message is required</p>}
            </FaurmeGroup>
            <motion.div 
                initial={{opacity: 0, y: 48 }} 
                animate={{ opacity:1, y: 0 }} 
                transition={{
                    duration: 1.6,
                }}
                className="button-container">
                <FancadeButton type="submit" text="Send" />
            </motion.div>
            {
                status === 200 &&
                <div ref={ref} style={{
                    position: "absolute",
                    top:"0",
                    left:"0",
                    backgroundImage:"linear-gradient(72deg, #D97192, #FAB589)",
                    width:"100%",
                    height:"100%",
                    borderRadius: 6,
                }}>
                    <p style={{
                        width:"100%",
                        height:"100%",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Thank you !
                    </p>
                </div>
            }
        </Faurme>
    )
}
export default Form 