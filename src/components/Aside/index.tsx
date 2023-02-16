import * as C from './styles'

import logoImg from '../../assets/logo.svg'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md'

function Aside() {
  return (
    <C.Container>
      <C.Header>
        <C.LogoImg src={logoImg} alt="Logo minha carteira" />
        <C.Title>Minha carteira</C.Title>
      </C.Header>

      <C.MenuContainer>
        <C.MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </C.MenuItemLink>
        <C.MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </C.MenuItemLink>
        <C.MenuItemLink href="#">
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
