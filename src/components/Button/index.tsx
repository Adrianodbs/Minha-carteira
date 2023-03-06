import * as C from './styles'
import { ButtonHTMLAttributes } from 'react'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, ...rest }: IButtonProps) {
  return <C.Container {...rest}>{children}</C.Container>
}

export default Button
