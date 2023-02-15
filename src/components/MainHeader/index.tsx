import { useMemo } from 'react'

import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

import * as C from './styles'

function MainHeader() {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])
  return (
    <C.Container>
      <Toggle />

      <C.Profile>
        <C.Welcome>Olá, {emoji}</C.Welcome>
        <C.UserName>Adriano Alves</C.UserName>
      </C.Profile>
    </C.Container>
  )
}

export default MainHeader
