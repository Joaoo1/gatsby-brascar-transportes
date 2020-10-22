import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
