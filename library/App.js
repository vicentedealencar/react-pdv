import React from 'react'
import { Library, Example } from '@compositor/kit'
import * as examples from './examples'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

export default () => (
  <ThemeProvider theme={theme}>
    <Library title="react-pdv">
      {Object.entries(examples).map(([name, Component]) => (
        <Example name={name} key={name}>
          <Component />
        </Example>
      ))}
    </Library>
  </ThemeProvider>
)
