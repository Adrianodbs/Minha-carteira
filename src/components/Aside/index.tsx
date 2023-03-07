import * as C from './styles'

import logoImg from '../../assets/logo.svg'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'

import { Link } from 'react-router-dom'

function Aside() {
  return (
    <C.Container>
      <C.Header>
        <C.LogoImg src={logoImg} alt="Logo minha carteira" />
        <C.Title>Minha carteira</C.Title>
      </C.Header>

      <C.MenuContainer>
        <C.MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </C.MenuItemLink>

        <C.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </C.MenuItemLink>
        <C.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </C.MenuItemLink>
        <C.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </C.MenuItemLink>
      </C.MenuContainer>
    </C.Container>
  )
}

export default Aside
