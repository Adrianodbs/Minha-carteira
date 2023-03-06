import { useMemo, useContext, useState } from 'react'
import { ThemeContext } from '../../hooks/theme'

import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

import * as C from './styles'

function MainHeader() {
  const { toggleTheme, theme } = useContext(ThemeContext)

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === 'dark' ? true : false
  )

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }
  return (
    <C.Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <C.Profile>
        <C.Welcome>Olá, {emoji}</C.Welcome>
        <C.UserName>Adriano Alves</C.UserName>
      </C.Profile>
    </C.Container>
  )
}

export default MainHeader
