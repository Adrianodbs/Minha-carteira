import * as C from './styles'
import logoImg from '../../assets/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'

import { useContext, useState } from 'react'
import { AuthContext } from '../../hooks/auth'

function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useContext(AuthContext)
  return (
    <C.Container>
      <C.Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </C.Logo>
      <C.Form onSubmit={() => signIn(email, password)}>
        <C.FormTitle>Entrar</C.FormTitle>

        <Input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </C.Form>
    </C.Container>
  )
}

export default SignIn
