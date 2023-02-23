import React from 'react'
import Layout from './components/Layout'

import { ThemeProvider } from 'styled-components'

import { Global } from './styles/GlobalStyles'
import { dark } from './styles/themes/dark'
import { light } from './styles/themes/light'
import Dashboard from './pages/Dashboard'
import List from './pages/List'
import Routes from './routes'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Routes />
    </ThemeProvider>
  )
}

export default App
