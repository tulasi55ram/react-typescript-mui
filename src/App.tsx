import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline'

import HomePage from './containers/HomePage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  )
}

export default App
