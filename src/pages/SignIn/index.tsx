import * as C from './styles'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

function SignIn() {
  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </C.Logo>
      <C.Form onSubmit={() => {}}>
        <C.FormTitle>Entrar</C.FormTitle>

        <Input required type="email" placeholder="E-mail" />
        <Input required type="password" placeholder="Senha" />

        <Button type="submit">Acessar</Button>
      </C.Form>
    </C.Container>
  )
}

export default SignIn
