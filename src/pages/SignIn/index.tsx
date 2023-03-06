import * as C from './styles'
import logoImg from '../../assets/logo.svg'

function SignIn() {
  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </C.Logo>
      <C.Form>
        <C.FormTitle>Entrar</C.FormTitle>

        <input type="text" />
        <input type="text" />

        <button type="submit">Acessar</button>
      </C.Form>
    </C.Container>
  )
}

export default SignIn
