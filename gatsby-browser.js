import React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './src/themes/theme'
import GlobalStateProvider from './src/store/globalStateProvider'

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalStateProvider>
            <ThemeProvider theme={Theme}>
                {element}
            </ThemeProvider>
        </GlobalStateProvider>
    )
}
