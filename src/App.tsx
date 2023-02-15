import React from 'react'
import Layout from './components/Layout'

import { ThemeProvider } from 'styled-components'

import { Global } from './styles/GlobalStyles'
import { dark } from './styles/themes/dark'
import { light } from './styles/themes/light'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Layout />
    </ThemeProvider>
  )
}

export default App
