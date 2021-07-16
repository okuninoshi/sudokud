import React, {useContext} from 'react'
import { User } from '@geist-ui/react'
import avatar from '../../images/icon.png'
import styled from 'styled-components'
import Context from '../../store/context'

const SUser = styled(User)`&&{
    .name, .social{
        color: ${props =>props.isDark ? props.theme.palette.cultured : props.theme.dark.Liberty};
        user-select: none;
    }
    .name{
        font-weight: bold;
    }
}`

const Avatar = () => {
    const {state} = useContext(Context)

    return (
    <SUser src={avatar} name='Chetoui Hamza' isDark={state.isDark}>
        Jamstack developer
    </SUser>
    )
}

export default Avatar