import React from 'react'
import Layout from './components/Layout'

import { ThemeProvider } from 'styled-components'

import { Global } from './styles/GlobalStyles'
import { dark } from './styles/themes/dark'
import { light } from './styles/themes/light'
import Dashboard from './pages/Dashboard'
import List from './pages/List'

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}

export default App
