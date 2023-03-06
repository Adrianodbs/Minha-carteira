import { useContext } from 'react'
import Layout from './components/Layout'

import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './hooks/theme'

import { Global } from './styles/GlobalStyles'
import { dark } from './styles/themes/dark'
import { light } from './styles/themes/light'
import Dashboard from './pages/Dashboard'
import List from './pages/List'
import Routes from './routes'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Routes />
    </ThemeProvider>
  )
}

export default App
