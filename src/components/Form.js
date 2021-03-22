import React from 'react'
import { useContext } from 'react'
import Context from '../store/context'
import styled from 'styled-components'
// import useSound from 'use-sound'
import FancadeButton from './buttons/FancadeStyleButton'

const Faurme = styled.form`
`
const FaurmeGroup = styled.div`
`
const Form = () => {
    const { state } = useContext(Context)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === 'false') {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    // const [playkeySound] = useSound(
    //     'audio/key_tap.wav', { volume: 0.25 }
    // )
    return (
        <Faurme
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="p-4 pt-1"
            isDark={state.isDark}
        >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    don't fill this out: <input name="bot-field" />
                </label>
            </p>
            <FaurmeGroup isDark={state.isDark}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email@sample.xyz"
                    required
                    // onChange={() => (playkeySound())}

                />
            </FaurmeGroup>
            <FaurmeGroup isDark={state.isDark}>
                <label htmlFor="message">Message</label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Hello world"
                    required
                    // onChange={() => (playkeySound())}
                />
            </FaurmeGroup>
            <FaurmeGroup>
                <FancadeButton type="submit" text="Send" />
            </FaurmeGroup>
        </Faurme>
    )
}
export default Form 